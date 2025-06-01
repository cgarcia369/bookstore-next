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
      <div className="h-[200px] w-[150px] relative rounded overflow-hidden shadow group">
        <Image src={imageUrl} alt={alt} height={200} width={150} className="object-cover bg-contain w-hull h-full" />
        <div className="bg-gray-800 opacity-60 absolute top-1/2 left-1/2 transform -translate-1/2 w-full h-full z-10"></div>
        <h3 className="text-xl text-white text-center absolute z-20 top-1/2 left-1/2 transform -translate-1/2 group-hover:underline group-hover:scale-125 transition-all underline-offset-8 text-nowrap">
          {title}
        </h3>
      </div>
    </Link>
  );
};

export default CategoryItem;
