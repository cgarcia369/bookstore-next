import { Book } from "@/generated/prisma";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";

type BookPriceProps = Pick<Book, "price" | "id">;

const BookPrice = ({ price, id }: BookPriceProps) => {
  return (
    <div className="flex items-center justify-between w-full bg-primary text-white p-10 my-15 rounded-2xl">
      <div className="flex flex-col justify-center items-center">
        <p className="text-xl">Precio:</p>
        <p className="text-3xl font-bold">$ {price.toFixed(2)}</p>
      </div>
      <div className="flex gap-x-4">
        <FaCheckCircle className="fill-current text-white w-[30px] h-[30px]" />
        <p className="text-xl">Compra segura</p>
      </div>
      <div>
        <button className="flex justify-center items-center gap-x-1 bg-secondary rounded px-4 py-2 font-semibold text-xl outline-none cursor-pointer hover:scale-110 transition-all">
          <TiShoppingCart className="fill-current text-white w-[30px] h-[30px]" />
          Agregar
        </button>
      </div>
    </div>
  );
};

export default BookPrice;
