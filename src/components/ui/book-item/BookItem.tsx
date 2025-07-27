import React from "react";
import Image from "next/image";
import { clsx } from "clsx";
import Link from "next/link";
import { TbShoppingCartCheck, TbShoppingCartPlus } from "react-icons/tb";

type BookItemBase = {
  coverUrl: string;
  title: string;
  starRating: number;
  price: number;
  isAlreadyInShoppingCart?: boolean;
  pageLink: string;
  textSize?: "small" | "normal";
  fixedSize?: boolean;
  className?: string;
  includeAuthors?: boolean;
};
type BookItemWithAuthor = BookItemBase & {
  author: string[];
  includeAuthors?: true;
};
type BookItemWithoutAuthor = BookItemBase & {
  author: undefined;
  includeAuthors: false;
};
type BookItemProps = BookItemWithoutAuthor | BookItemWithAuthor;

const BookItem = ({
  author,
  price,
  coverUrl,
  starRating,
  title,
  pageLink,
  className,
  textSize = "normal",
  fixedSize = true,
  includeAuthors = true,
  isAlreadyInShoppingCart = false
}: BookItemProps) => {
  return (
    <div className={clsx("relative overflow-hidden group ", className)}>
      <div
        className={"absolute top-0 right-0 m-2 cursor-pointer  p-2 rounded hover:scale-110 transition-all bg-secondary"}
      >
        {isAlreadyInShoppingCart ? (
          <TbShoppingCartCheck size={20} className="fill-current text-primary" />
        ) : (
          <TbShoppingCartPlus size={20} className="fill-current text-primary" />
        )}
      </div>
      <Link href={pageLink}>
        <Image src={coverUrl} alt={title} width={160} height={240} className="h-[260px] w-full object-cover rounded" />
        <h2 className={clsx("mt-8", textSize === "normal" ? "text-base" : "text-sm", fixedSize && "h-20")}>{title}</h2>
        {includeAuthors && author && (
          <h3
            className={clsx(
              "mt-2  text-nowrap text-ellipsis whitespace-nowrap overflow-hidden text-gray-500",
              textSize === "normal" ? "text-sm" : "text-xs"
            )}
          >
            {author.join(", ")}
          </h3>
        )}
        <div className="flex items-center mt-4">
          <span className="mr-2 bg-accent text-white rounded p-1 text-xs">${price.toFixed(2)}</span>
          <span className="ml-auto text-yellow-500">
            {"★".repeat(starRating)}
            {"☆".repeat(5 - starRating)}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default BookItem;
