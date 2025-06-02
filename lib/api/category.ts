import { unstable_cache } from "next/cache";
import prisma from "@/lib/prisma";

const getPopularCategories = () => {
  return prisma.category.findMany({
    select: {
      id: true,
      name: true,
      slug: true,
      imageUrl: true,
      _count: {
        select: {
          booksCategories: true
        }
      }
    },
    orderBy: {
      booksCategories: {
        _count: "desc"
      }
    },
    take: 10
  });
};
export const getCategoriesKey = "get-categories";

export const getPopularCategoriesQuery = () => {
  return unstable_cache(async () => getPopularCategories(), [getCategoriesKey], {
    revalidate: 1
  })();
};
