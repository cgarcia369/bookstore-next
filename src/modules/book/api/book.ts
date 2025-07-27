import prisma from "@/lib/prisma";
import { unstable_cache } from "next/cache";

export const getBook = (bookId: string) => {
  return prisma.book.findUnique({
    where: {
      id: bookId
    },
    include: {
      authorsBooks: {
        include: {
          author: true
        }
      },
      editorial: true
    }
  });
};
export const getBooksByAuthor = (author_id: string) => {
  return prisma.book.findMany({
    where: {
      authorsBooks: {
        some: {
          authorsId: author_id
        }
      }
    }
  });
};

export const getBookQuery = (bookId: string) => {
  return unstable_cache(async () => getBook(bookId), [bookId], {
    revalidate: 60 * 60 * 24
  })();
};
export const getBooksByAuthorQuery = (author_id: string) => {
  return unstable_cache(() => getBooksByAuthor(author_id), [author_id], {
    revalidate: 60 * 60 * 24
  })();
};
