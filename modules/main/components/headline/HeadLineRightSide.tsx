import React from "react";
import Link from "next/link";
import { GiBookCover } from "react-icons/gi";
import HeadLineOpinions from "@/modules/main/components/headline/HeadLineOpinions";

const HeadLineRightSide = () => {
  return (
    <div className="flex flex-col items-center justify-between text-(--primary) relative w-[800px]">
      <div className="z-20 text-center">
        <div className="flex mx-auto justify-center">
          <h1 className={`text-5xl text-primary`}>¿Buscas un libro?</h1>
          <GiBookCover className="text-secondary ml-6" size={50} />
        </div>
        <h2 className="text-3xl text-nowrap mt-6">
          Encuentralo en <span className="font-(family-name:--font-playwrite-hu) text-secondary">Bookstore</span>
        </h2>
        <h3 className="text-xl mt-9 font-light">Encuentra los libros que amas y descubre nuevos favoritos</h3>
        <div>
          <input
            className="outline-none px-4 py-2 border-gray-700 border rounded mr-10 min-w-[300px]"
            placeholder="Buscar un libro"
          />
          <Link href="/catalogo">
            <button className="cursor-pointer mt-10 p-2 bg-(--secondary) text-(--primary) rounded text-lg hover:scale-125 transition shadow-2xl">
              Buscar
            </button>
          </Link>
        </div>
      </div>
      <HeadLineOpinions />
    </div>
  );
};

export default HeadLineRightSide;
