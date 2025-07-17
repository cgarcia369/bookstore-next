import { ItemAccessor } from "@/modules/query/types/propertyAccessor";

export const refineListsObj: Record<string, ItemAccessor> = {
  category: { attribute: "booksCategories.category.name", title: "Categorías", queryName: "category" },
  authors: { attribute: "authorsBooks.author.name", title: "Autores", queryName: "authors" }
};
export const refineLists = Object.values(refineListsObj);
