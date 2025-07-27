import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel/carousel";
import MustReadBook from "./MustReadBook";
const images = ["/img/mustread/book1.jpg", "/img/mustread/book2.jpg", "/img/mustread/book3.jpg"];
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
