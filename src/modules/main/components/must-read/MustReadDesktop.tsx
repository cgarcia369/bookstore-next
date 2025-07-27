import React from "react";
import MustReadBook from "./MustReadBook";
const MustReadDesktop = () => {
  return (
    <div className="hidden mx-auto mt-20 justify-center md:flex gap-x-12 items-center">
      <MustReadBook imageSrc="/img/mustread/book1.jpg" className={"opacity-70"} alt={"Book 1"} size={300} />
      <MustReadBook imageSrc="/img/mustread/book2.jpg" alt={"Book 2"} size={400} />
      <MustReadBook imageSrc="/img/mustread/book3.jpg" className={"opacity-70"} alt={"Book 1"} size={300} />
    </div>
  );
};

export default MustReadDesktop;
