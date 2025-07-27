import React from "react";
import Image from "next/image";
import { Alumni_Sans } from "next/font/google";
import MustReadDevice from "./MustReadDevice";
import MustReadDesktop from "./MustReadDesktop";
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
      <MustReadDesktop />
      <MustReadDevice />
      <Image
        src="/img/mustread/background.jpg"
        alt={"must read background"}
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
