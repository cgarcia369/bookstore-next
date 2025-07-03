import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/components/carousel/carousel";
import CategoryItem from "./CategoryItem";
import { getPopularCategoriesQuery } from "@/components/main/api";
import { getCategorySlug } from "@/components/main/utils/getCategorySlug";

const Categories = async () => {
  const categories = await getPopularCategoriesQuery();
  return (
    <div className="my-5 lg:my-10 general-margin">
      <h2 className="my-10 text-2xl text-center text-primary">Categorías Populares</h2>
      <Carousel className="w-full">
        <CarouselContent className="w-full">
          {categories.map((category) => (
            <CarouselItem className="basis-4/6 lg:basis-1/6" key={category.id}>
              <CategoryItem
                key={category.id}
                imageUrl={category.imageUrl}
                title={category.name}
                url={getCategorySlug(category.slug)}
                alt={category.name}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Categories;
