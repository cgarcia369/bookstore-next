import prisma from "@/lib/prisma";
import { unstable_cache } from "next/cache";

// TODO: not use this export directly in the components but import from index.ts

export const getPopularBooks = async () => {
  const groupedReviews = await prisma.review.groupBy({
    by: ["bookId"],
    _avg: {
      rating: true
    },
    orderBy: {
      _avg: {
        rating: "desc"
      }
    },
    take: 10
  });

  const books = await prisma.book.findMany({
    where: {
      isDeleted: false,
      id: {
        in: groupedReviews.map((review) => review.bookId)
      }
    },
    select: {
      id: true,
      price: true,
      title: true,
      imageUrl: true,
      authorsBooks: {
        select: {
          author: {
            select: {
              name: true
            }
          }
        }
      }
    },
    take: 10
  });
  return books.map((book) => {
    return {
      ...book,
      starRating: groupedReviews.find((review) => review.bookId === book.id)?._avg.rating || 0
    };
  });
};

export const getPopularBooksKey = "get-popular-books";

export const getPopularBooksQuery = async () => {
  return unstable_cache(getPopularBooks, [getPopularBooksKey], {
    revalidate: 60 * 60 * 24
  })();
};
