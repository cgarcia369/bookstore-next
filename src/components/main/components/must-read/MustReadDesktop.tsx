import React from "react";
import MustReadBook from "./MustReadBook";
import bookOneSrc from "@/public/img/mustread/book1.jpg";
import bookTwoSrc from "@/public/img/mustread/book2.jpg";
import bookThreeSrc from "@/public/img/mustread/book3.jpg";
const MustReadDesktop = () => {
  return (
    <div className="hidden mx-auto mt-20 justify-center md:flex gap-x-12 items-center">
      <MustReadBook imageSrc={bookTwoSrc} className={"opacity-70"} alt={"Book 1"} size={300} />
      <MustReadBook imageSrc={bookOneSrc} alt={"Book 2"} size={400} />
      <MustReadBook imageSrc={bookThreeSrc} className={"opacity-70"} alt={"Book 1"} size={300} />
    </div>
  );
};

export default MustReadDesktop;
