import React from "react";
import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
];
const HeadLineOpinions = () => {
  return (
    <div className="flex flex-col mt-10">
      <div className="flex -space-x-1 overflow-hidden mx-auto mb-5">
        {images.map((src, index) => (
          <Image
            key={index}
            className="inline-block size-10 rounded-full ring-2 ring-white"
            src={src}
            alt=""
            width={50}
            height={50}
          />
        ))}
      </div>
      <h3>Más de 1000+ opiniones de nuestros clientes</h3>
    </div>
  );
};

export default HeadLineOpinions;
