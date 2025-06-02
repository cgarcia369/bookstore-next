import translate from "translate";
import ISBNList from "./isbnjson.json";
import BooksRequest from "./booksrequest.json";
import prisma from "@/lib/prisma";
import slugify from "slugify";

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
        data: { name: author }
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
const seedDb = async () => {
  console.log("Seeding database with books...");
  await flushDb();
  const spanishLanguage = await prisma.language.create({
    data: {
      name: "Español",
      code: "es"
    }
  });
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
        imageUrl: foundItem.volumeInfo.imageLinks.thumbnail,
        title: title,
        isbn,
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
        stock: Math.random() * 10 + 1
      }
    });
  }
};
seedDb();
