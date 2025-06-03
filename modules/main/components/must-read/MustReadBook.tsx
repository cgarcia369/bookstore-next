import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
type MustReadBookProps = {
  className?: string;
  imageSrc: StaticImport;
  alt?: string;
  size: number;
};

const MustReadBook = ({ className, imageSrc, alt, size }: MustReadBookProps) => {
  const calculatedWidth = (size * 63) / 100;
  return (
    <>
      <div
        className={cn(className, `relative z-20 rounded overflow-hidden`)}
        style={{
          height: `${size}px`,
          width: `${calculatedWidth}px`
        }}
      >
        <Image
          src={imageSrc}
          alt={alt ?? "Book"}
          placeholder="blur"
          quality={100}
          fill
          sizes="100%"
          style={{
            objectFit: "cover"
          }}
        />
      </div>
    </>
  );
};

export default MustReadBook;
