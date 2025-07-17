import React from "react";
import Image from "next/image";
import Link from "next/link";

type CategoryItemProps = {
  imageUrl: string;
  title: string;
  url: string;
  alt: string;
};

const CategoryItem = ({ imageUrl, url, title, alt }: CategoryItemProps) => {
  return (
    <Link href={url}>
      <div className=" h-[160px] relative rounded overflow-hidden group">
        <Image
          src={imageUrl}
          alt={alt}
          width={240}
          height={160}
          className="object-cover bg-contain w-full h-full min-w-full"
        />
        <div className="bg-gray-800 opacity-60 absolute top-1/2 left-1/2 transform -translate-1/2 w-full h-full z-10"></div>
        <h3 className="text-xl text-white text-center absolute z-20 top-1/2 left-1/2 transform -translate-1/2 group-hover:scale-110 transition-all ">
          {title}
        </h3>
      </div>
    </Link>
  );
};

export default CategoryItem;
