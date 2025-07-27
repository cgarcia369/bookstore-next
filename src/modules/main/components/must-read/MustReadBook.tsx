import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
type MustReadBookProps = {
  className?: string;
  imageSrc: string;
  alt?: string;
  size?: number;
};

const MustReadBook = ({ className, imageSrc, alt, size }: MustReadBookProps) => {
  const calculatedWidth = size && (size * 63) / 100;
  return (
    <>
      <div
        className={cn(
          className,
          `relative z-20 rounded overflow-hidden group transition-all cursor-pointer hover:shadow-2xl hover:shadow-secondary/50`
        )}
        style={
          size
            ? {
                height: `${size}px`,
                width: `${calculatedWidth}px`
              }
            : undefined
        }
      >
        <Image
          src={imageSrc}
          alt={alt ?? "Book"}
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
