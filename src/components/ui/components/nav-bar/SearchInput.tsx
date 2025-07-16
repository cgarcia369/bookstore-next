import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { cn } from "@/lib/utils";

type SearchInputProps = {
  className?: string;
};

const SearchInput = ({ className }: SearchInputProps) => {
  return (
    <form action="/search" method="GET" className={cn("gap-x-4 relative", className)}>
      <input
        className="py-1 px-3 rounded-full border border-gray-700 pr-10 outline-none w-full"
        type="text"
        placeholder={"Buscar un libro"}
        name="q"
      />
      <BiSearchAlt
        size={25}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 fill-current text-gray-800"
      />
    </form>
  );
};

export default SearchInput;
