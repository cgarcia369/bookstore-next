"use client";
import React from "react";
import { useHits } from "react-instantsearch-core";
import BookItem from "@/components/ui/components/book-item/BookItem";
import { BookHit } from "@/types";
import { clsx } from "clsx";

const Hits = () => {
  const { hits } = useHits<BookHit>();
  return (
    <>
      <div
        className={clsx(
          "grid gap-8  items-center",
          hits.length > 5
            ? "grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] justify-center"
            : "grid-cols-[repeat(auto-fit,_minmax(180px,_200px))]"
        )}
      >
        {hits.map((hit) => (
          <BookItem
            fixedSize={false}
            textSize={"small"}
            coverUrl={hit.imageUrl}
            title={hit.title}
            author={hit.authorsBooks.map((x) => x.author.name)}
            starRating={hit.avgRating || 0}
            key={hit.id}
            price={hit.price}
            pageLink={"google.com"}
          />
        ))}
      </div>
    </>
  );
};

export default Hits;
