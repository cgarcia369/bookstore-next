import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import MustReadBook from "./MustReadBook";
import bookOneSrc from "@/public/img/mustread/book1.jpg";
import bookTwoSrc from "@/public/img/mustread/book2.jpg";
import bookThreeSrc from "@/public/img/mustread/book3.jpg";
const images = [bookOneSrc, bookTwoSrc, bookThreeSrc];
const MustReadDevice = () => {
  return (
    <Carousel className="md:hidden w-full mx-auto mt-20 z-20">
      <CarouselContent className="w-full">
        {images.map((image, index) => (
          <CarouselItem className="basis-full " key={index}>
            <MustReadBook className="mx-auto" imageSrc={image} alt={`Book ${index}`} size={400} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default MustReadDevice;
