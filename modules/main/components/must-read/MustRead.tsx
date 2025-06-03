import React from "react";
import Image from "next/image";
import imgSrc from "@/public/img/mustread/background.jpg";
import bookOneSrc from "@/public/img/mustread/book1.jpg";
import bookTwoSrc from "@/public/img/mustread/book2.jpg";
import bookThreeSrc from "@/public/img/mustread/book3.jpg";
import { Alumni_Sans } from "next/font/google";
import MustReadBook from "@/modules/main/components/must-read/MustReadBook";
const alumniSans = Alumni_Sans({
  variable: "--font-alumni-sans",
  subsets: ["latin"]
});
const MustRead = () => {
  return (
    <div className="w-dvw relative h-[800px] overflow-hidden my-10 flex flex-col justify-center">
      <h2
        className={`z-20 relative text-white text-5xl mx-auto text-center ${alumniSans.className} underline underline-offset-8 decoration-secondary`}
      >
        Explora los mejores mundos de fantasía con estos libros.
      </h2>
      <div className="mx-auto mt-20 justify-center flex gap-x-12 items-center">
        <MustReadBook imageSrc={bookTwoSrc} className={"opacity-70"} alt={"Book 1"} size={300} />
        <MustReadBook imageSrc={bookOneSrc} alt={"Book 2"} size={400} />
        <MustReadBook imageSrc={bookThreeSrc} className={"opacity-70"} alt={"Book 1"} size={300} />
      </div>
      <Image
        src={imgSrc}
        alt={"must read background"}
        placeholder="blur"
        quality={100}
        fill
        sizes="100dvw"
        style={{
          objectFit: "cover"
        }}
      />
    </div>
  );
};

export default MustRead;
