"use client";
import React from "react";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/components/form/form";
import { Input } from "@/components/ui/components/input/input";
import { BiSearchAlt } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import useSearch from "@/components/query/components/search-box/hooks/useSearch";

const SearchBox = () => {
  const { handleSubmit, handleKeyDown, handleClearInput, form, showClear } = useSearch();

  return (
    <div className="w-full">
      <form
        onSubmit={form.handleSubmit(({ search }) => {
          handleSubmit(search);
        })}
      >
        <Form {...form}>
          <FormField
            control={form.control}
            name="search"
            render={() => (
              <FormItem>
                <FormControl>
                  <div className="flex flex-row">
                    {showClear && (
                      <button
                        className="my-auto flex justify-center items-center border border-gray-200 h-[36px] w-[36px] rounded group hover:border-gray-400 mr-2"
                        onClick={handleClearInput}
                        aria-label={"clear"}
                      >
                        <IoMdClose size={25} className="cursor-pointer  text-gray-400 group-hover:text-gray-600 " />
                      </button>
                    )}
                    <div className="flex w-full relative">
                      <Input
                        className="pr-10"
                        placeholder="Buscar (Título, Autor, ISBN)..."
                        {...form.register("search")}
                        onKeyDown={handleKeyDown}
                      />
                      <button
                        className="cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2"
                        type="submit"
                        aria-label={"search"}
                      >
                        <BiSearchAlt size={25} className=" fill-current text-gray-400 hover:text-gray-600" />
                      </button>
                    </div>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
        </Form>
      </form>
    </div>
  );
};

export default SearchBox;
