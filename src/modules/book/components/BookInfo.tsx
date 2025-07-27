import { Book } from "@/generated/prisma";
import React from "react";
import BookInfoItem from "./BookInfoItem";

type BookInfoProps = Pick<Book, "isbn" | "avgRating" | "numberPages" | "yearPublished"> & {
  editorial: string;
  authors: string;
};
const properties: {
  title: string;
  value: keyof BookInfoProps;
}[] = [
  {
    title: "Autores",
    value: "authors"
  },
  {
    title: "Isbn",
    value: "isbn"
  },
  {
    title: "Editorial",
    value: "editorial"
  },
  {
    title: "Número de páginas",
    value: "numberPages"
  },
  {
    title: "Año de publicación",
    value: "yearPublished"
  },
  {
    title: "Calificación",
    value: "avgRating"
  }
];
const BookInfo = (props: BookInfoProps) => {
  return (
    <div className="flex flex-col w-full gap-y-10">
      <h2 className="text-3xl text-gray-800 font-semibold">Información del libro</h2>
      <div className="flex flex-col gap-4">
        {properties.map((property) => (
          <BookInfoItem title={property.title} value={props[property.value]!.toString()} key={property.value} />
        ))}
      </div>
    </div>
  );
};

export default BookInfo;
