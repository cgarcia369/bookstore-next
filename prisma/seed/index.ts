import translate from "translate";
import ISBNList from "./isbnjson.json";
import BooksRequest from "./booksrequest.json";
import prisma from "@/lib/prisma";
import slugify from "slugify";
import { algoliaServer } from "@/lib/algoliaServer";
import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://api.deepseek.com",
  apiKey: process.env.DEEPSEEK_API
});

const translateText = async (text: string): Promise<string> => {
  return await translate(text, "es");
};
const flushDb = async () => {
  await Promise.all([
    prisma.$queryRaw`
      TRUNCATE TABLE "books" CASCADE;
    `
  ]);
};
const createAuthorBiography = async (author_name: string) => {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `Crea una biografia de el siguiente autor, si no tienes informacion del autor inventa una, el resultado debe contener uas 100 palabras. autor: ${author_name}`
      }
    ],
    model: "deepseek-chat"
  });
  return completion.choices[0].message.content;
};
const createAuthorsIfNotExists = (authors: string[]) => {
  return Promise.all(
    authors.map(async (author) => {
      const existingAuthor = await prisma.author.findUnique({
        where: { name: author }
      });
      if (existingAuthor) {
        return existingAuthor.id;
      }
      const newAuthor = await prisma.author.create({
        data: { name: author, biography: (await createAuthorBiography(author)) || "" }
      });
      return newAuthor.id;
    })
  );
};
const createEditorialIfNotExists = async (name: string) => {
  const existingEditorial = await prisma.editorial.findUnique({
    where: { name }
  });
  if (existingEditorial) {
    return existingEditorial.id;
  }
  const newEditorial = await prisma.editorial.create({
    data: { name }
  });
  return newEditorial.id;
};
const createCategoriesIfNotExists = async (categories: string[]) => {
  return Promise.all(
    categories.map(async (category) => {
      const categoryTranslated = await translateText(category);
      const existingCategory = await prisma.category.findUnique({
        where: { name: categoryTranslated }
      });
      if (existingCategory) {
        return existingCategory.id;
      }
      const newCategory = await prisma.category.create({
        data: {
          name: categoryTranslated,
          slug: slugify(categoryTranslated),
          imageUrl: `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 1000)}`
        }
      });
      return newCategory.id;
    })
  );
};
const createDefaultUser = () => {
  return prisma.user.create({
    data: {
      name: "Test user",
      image: "https://picsum.photos/200/300?random=1",
      emailVerified: new Date(),
      createdAt: new Date()
    }
  });
};
const createSpanishLanguage = () => {
  return prisma.language.create({
    data: {
      name: "Español",
      code: "es"
    }
  });
};
const seedDb = async () => {
  console.log("Seeding database with books...");
  await flushDb();
  const defaultUser = await createDefaultUser();
  const spanishLanguage = await createSpanishLanguage();
  for (const isbn of ISBNList) {
    const foundItem = BooksRequest.find((x) =>
      x.volumeInfo.industryIdentifiers.some(({ identifier }) => identifier === isbn)
    );
    if (!foundItem) {
      continue;
    }
    const authors = foundItem.volumeInfo.authors || [];
    const authorIds = await createAuthorsIfNotExists(authors);
    const editorial = foundItem.volumeInfo.publisher;
    const editorialId = await createEditorialIfNotExists(editorial);
    const categories = foundItem.volumeInfo.categories;
    const categoryIds = await createCategoriesIfNotExists(categories || []);
    const title = `${foundItem.volumeInfo.title}${foundItem.volumeInfo.subtitle ? ` ${foundItem.volumeInfo.subtitle}` : ""}`;
    const existsBook = await prisma.book.findUnique({
      where: {
        title: title
      }
    });
    if (existsBook) {
      continue;
    }
    await prisma.book.create({
      data: {
        avgRating: Math.floor(Math.random() * 5) + 1,
        imageUrl: foundItem.volumeInfo.imageLinks.thumbnail,
        title: title,
        isbn,
        price: Math.random() * 100 + 1,
        editorial: {
          connect: {
            id: editorialId
          }
        },
        language: {
          connect: {
            id: spanishLanguage.id
          }
        },
        numberPages: foundItem.volumeInfo.pageCount || 0,
        synopsis: foundItem.volumeInfo.description || "No description available",
        slug: slugify(foundItem.volumeInfo.title),
        yearPublished: Number(foundItem.volumeInfo.publishedDate.slice(0, 4) || "0000"),
        booksCategories: {
          create: categoryIds.map((id) => ({
            category: {
              connect: {
                id
              }
            }
          }))
        },
        authorsBooks: {
          create: authorIds.map((id) => ({
            author: {
              connect: {
                id
              }
            }
          }))
        },
        stock: Math.random() * 10 + 1,
        reviews: {
          create: {
            rating: Math.floor(Math.random() * 5) + 1,
            userId: defaultUser.id,
            comment: "This is a sample review for the book."
          }
        }
      }
    });
  }
};
const indexInfoAlgolia = async () => {
  const books = await prisma.book.findMany({
    include: {
      editorial: true,
      language: true,
      authorsBooks: {
        include: {
          author: true
        }
      },
      booksCategories: {
        include: {
          category: true
        }
      }
    }
  });
  return algoliaServer.saveObjects({
    indexName: "books_index",
    objects: books
  });
};
(async () => {
  await seedDb();
  await indexInfoAlgolia();
})();
