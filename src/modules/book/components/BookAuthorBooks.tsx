import BookItem from "@/components/ui/book-item/BookItem";
import {
  Carousel,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselContent
} from "@/components/ui/carousel/carousel";
import React from "react";
import { getBooksByAuthorQuery } from "../api/book";

type BookAuthorBooksProps = {
  author_id: string;
};

const BookAuthorBooks = async ({ author_id }: BookAuthorBooksProps) => {
  const books = await getBooksByAuthorQuery(author_id);

  return (
    <div className="flex flex-col w-full mt-10">
      <h2 className="text-3xl text-gray-800 font-semibold">Del mismo autor</h2>
      <Carousel className="w-full mt-10">
        <CarouselContent className="w-full gap-x-4">
          {books.map((book) => (
            <CarouselItem className="basis-[200px]" key={book.id}>
              <BookItem
                key={book.id}
                {...book}
                author={undefined}
                starRating={book.avgRating || 0}
                coverUrl={book.imageUrl}
                pageLink={""}
                includeAuthors={false}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default BookAuthorBooks;
