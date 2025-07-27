import React from "react";
import { getBook } from "../api";
import { notFound } from "next/navigation";
import BookHeadLine from "./BookHeadLine";
import BookInfo from "./BookInfo";
import BookAuthor from "./BookAuthor";
import BookAuthorBooks from "./BookAuthorBooks";

type BookProps = {
  book_id: string;
  book_slug: string;
};

const Book = async ({ book_id }: BookProps) => {
  const book = await getBook(book_id);
  if (!book) return notFound();
  const principalAuthor = book.authorsBooks[0].author;

  return (
    <div className="flex flex-col w-full max-w-[1200px] mx-auto">
      <BookHeadLine {...book} authors={book.authorsBooks.map((x) => x.author)} />
      <div className="flex flex-row shadow-xl px-6 py-4 overflow-hidden mt-4">
        <BookInfo
          {...book}
          editorial={book.editorial.name}
          authors={book.authorsBooks.map((x) => x.author.name).join(", ")}
        />
        <BookAuthor {...principalAuthor} />
      </div>
      <BookAuthorBooks author_id={principalAuthor.id} />
    </div>
  );
};

export default Book;
