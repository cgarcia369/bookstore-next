export const refineListsObj = {
  category: { attribute: "booksCategories.category.name", title: "Categorías", queryName: "category" },
  authors: { attribute: "authorsBooks.author.name", title: "Autores", queryName: "authors" }
};
export const refineLists = Object.values(refineListsObj);
