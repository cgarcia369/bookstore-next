import React from "react";
import Image from "next/image";

type BooksItemProps = {
  coverUrl: string;
  title: string;
  author: string[];
  starRating: number;
  price: number;
};

const BooksItem = ({ author, price, coverUrl, starRating, title }: BooksItemProps) => {
  return (
    <div className="relative overflow-hidden group">
      <Image src={coverUrl} alt={title} width={160} height={240} className="h-[260px] w-full object-cover rounded" />
      <h2 className="mt-8 text-base h-20">{title}</h2>
      <h3 className="mt-2 text-sm text-nowrap text-ellipsis whitespace-nowrap overflow-hidden text-gray-500">
        {author.join(", ")}
      </h3>
      <div className="flex items-center mt-4">
        <span className="mr-2 bg-accent text-white rounded p-1 text-xs">${price.toFixed(2)}</span>
        <span className="ml-auto text-yellow-500">
          {"★".repeat(starRating)}
          {"☆".repeat(5 - starRating)}
        </span>
      </div>
    </div>
  );
};

export default BooksItem;
