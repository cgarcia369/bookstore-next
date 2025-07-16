import { Author, AuthorBook, Book, BookCategory, Category, Editorial, Language } from "@/generated/prisma";

export type BookHit = Book & {
  editorial: Editorial;
  language: Language;
  authorsBooks: (AuthorBook & {
    author: Author;
  })[];
  booksCategories: (BookCategory & {
    category: Category;
  })[];
};
