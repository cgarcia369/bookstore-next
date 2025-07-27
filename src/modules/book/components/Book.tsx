import React from "react";
import { getBook } from "../api";
import { notFound } from "next/navigation";
import BookHeadLine from "./BookHeadLine";
import BookInfo from "./BookInfo";

type BookProps = {
  book_id: string;
  book_slug: string;
};

const Book = async ({ book_id }: BookProps) => {
  const book = await getBook(book_id);
  if (!book) return notFound();

  return (
    <div className="flex flex-col w-full max-w-[1200px] mx-auto">
      <BookHeadLine {...book} authors={[{ name: "Camilo Garcia", id: "1" }]} />
      <BookInfo {...book} editorial={"Soy editorial"} authors="Brandon Sanderson" />
    </div>
  );
};

export default Book;
