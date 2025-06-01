import React from "react";
import { BiSearchAlt } from "react-icons/bi";

type SearchInputProps = {
  onSearch: (search: string) => void;
};

const SearchInput = ({ onSearch }: SearchInputProps) => {
  return (
    <div className="flex gap-x-4 relative">
      <input
        className="py-1 px-3 rounded-full border border-gray-700 pr-10 outline-none"
        type="text"
        placeholder={"Buscar un libro"}
      />
      <BiSearchAlt
        size={25}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 fill-current text-gray-800"
      />
    </div>
  );
};

export default SearchInput;
