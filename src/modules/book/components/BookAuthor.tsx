import { Author } from "@/generated/prisma";
import React from "react";

type BookAuthorProps = Author;
const BookAuthor = ({ name, biography }: BookAuthorProps) => {
  return (
    <div className="flex flex-col gap-y-10">
      <h2 className="text-3xl text-gray-800 font-semibold">Sobre el autor</h2>
      <p>{biography}</p>
    </div>
  );
};

export default BookAuthor;
