import React from "react";
import { getPopularBooksQuery } from "@/modules/main/api/book";
import BookItem from "@/components/ui/book-item/BookItem";
import {
  Carousel,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselContent
} from "@/components/ui/carousel/carousel";
import Link from "next/link";

const Books = async () => {
  const booksResult = await getPopularBooksQuery();
  return (
    <div className="mt-10 mb-20 general-margin cursor-pointer">
      <div className="flex items-center my-10">
        <h2 className="text-2xl flex-1 text-primary">Libros Populares</h2>
        <Link href={""}>
          <h2 className="text-sm text-(--secondary) font-bold">Ver más</h2>
        </Link>
      </div>
      <Carousel className="w-full">
        <CarouselContent className="w-full gap-x-4">
          {booksResult.map((book) => (
            <CarouselItem className="basis-[200px]" key={book.id}>
              <BookItem
                key={book.id}
                {...book}
                author={book.authorsBooks.map((author) => author.author.name)}
                coverUrl={book.imageUrl}
                pageLink={""}
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

export default Books;
