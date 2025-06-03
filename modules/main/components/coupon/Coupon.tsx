import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

import { Alumni_Sans } from "next/font/google";
const alumniSans = Alumni_Sans({
  variable: "--font-alumni-sans",
  subsets: ["latin"]
});
const Coupon = () => {
  return (
    <div className="flex general-padding bg-primary rounded mt-40 mb-20 overflow-hidden">
      <Image
        src="/img/coupon/background.jpg"
        alt="Coupon background"
        width={800}
        height={800}
        className="object-cover w-[600px] h-auto"
      />
      <div className="text-white mx-20 my-10 flex flex-col gap-y-10">
        <h3 className={`${alumniSans.className} text-2xl border border-white p-0.5 px-1 w-max rounded`}>
          Oferta limitada
        </h3>
        <h2 className="text-3xl">
          <span className="text-4xl font-bold">50%</span> de descuento en tu primera compra registrándote antes del
          <span className="font-bold"> 31 de diciembre</span>
        </h2>
        <Link href="">
          <button className="flex items-center bg-secondary p-2 rounded cursor-pointer outline-none hover:shadow hover:shadow-secondary hover:scale-110 transition-all">
            Registrarse ahora
            <FaLongArrowAltRight className="fill-current ml-4" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Coupon;
