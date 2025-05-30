import React from "react";
import Image from "next/image";
import { Playwrite_HU } from "next/font/google";
import Link from "next/link";

const playwriteHU = Playwrite_HU({
  variable: "--font-playwrite-hu"
});
const MyComponent = () => {
  return (
    <div className=" mt-20 flex flex-row items-center justify-between px-10 ">
      <Image
        src="/img/headline/headlinemainimage.png"
        width={1000}
        height={1000}
        alt={"Head line image"}
        className="w-[550px] h-[550px] object-cover"
      />
      <div className="flex flex-col items-center justify-between text-(--primary) relative w-[800px]">
        <div>
          <Image
            src="/img/headline/headlinewavedecorations.png"
            className="w-[700px] absolute top-[50%] left-1/2 transform -translate-x-1/2  -translate-[calc(50%-10px)] object-cover "
            width={900}
            height={900}
            alt={"Head line wave"}
          />
          <Image
            src="/img/headline/headlinewave.svg"
            className="w-[620px] absolute top-[50%] left-1/2 transform -translate-x-1/2  -translate-[calc(50%-10px)] object-cover rotate-320"
            width={900}
            height={900}
            alt={"Head line wave"}
          />
          <Image
            src="/img/headline/headlinewave.svg"
            className="w-[620px] absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-[calc(50%-10px)] object-cover rotate-300"
            width={900}
            height={900}
            alt={"Head line wave"}
          />
        </div>
        <div className="z-20 text-center">
          <h1 className={`text-4xl text-(--secondary) mb-10 ${playwriteHU.className}`}>Bookstore</h1>
          <h2 className="text-3xl">La mejor librería online del mundo</h2>
          <h3 className="text-xl mt-3">Encuentra los libros que amas y descubre nuevos favoritos</h3>
          <Link href="/catalogo">
            <button className="cursor-pointer mt-10 p-2 bg-(--secondary) text-(--primary) rounded text-xl hover:scale-125 transition shadow-2xl">
              Explorar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
