import { Author, Book } from "@/generated/prisma";
import { Oswald } from "next/font/google";
import Image from "next/image";
import React from "react";
import BookPrice from "./BookPrice";

const oswaldfont = Oswald({
  subsets: ["latin"]
});
type BookHeadLineProps = Pick<Book, "price" | "title" | "imageUrl" | "synopsis" | "id"> & {
  authors: Author[];
};
const BookHeadLine = ({ imageUrl, title, authors, synopsis, ...rest }: BookHeadLineProps) => {
  return (
    <div className="flex flex-row ">
      <Image className="h-[400px] w-[250px]" width={500} height={500} alt="Book image" src={imageUrl} />
      <div className="flex-1 ml-20 ">
        <h1 className={`text-4xl text-gray-800 ${oswaldfont.className}`}>{title}</h1>
        <h2 className="text-lg text-gray-500 mt-3">{authors.map((x) => x.name).join(", ")}</h2>
        <p className="mt-10 text-base text-gray-700">{synopsis}</p>
        <BookPrice {...rest} />
      </div>
    </div>
  );
};

export default BookHeadLine;
