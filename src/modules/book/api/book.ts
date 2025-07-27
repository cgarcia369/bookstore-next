import prisma from "@/lib/prisma";
import { unstable_cache } from "next/cache";

export const getBook = (bookId: string) => {
  return prisma.book.findUnique({
    where: {
      id: bookId
    }
  });
};

export const getBookQuery = (bookId: string) => {
  return unstable_cache(async () => getBook(bookId), [bookId], {
    revalidate: 60 * 60 * 24
  })();
};
