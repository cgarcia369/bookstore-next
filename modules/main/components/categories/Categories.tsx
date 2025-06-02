import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import CategoryItem from "@/modules/main/components/categories/CategoryItem";
import { getPopularCategoriesQuery } from "@/modules/main/api";
import { getCategorySlug } from "@/modules/main/utils/getCategorySlug";

const Categories = async () => {
  const categories = await getPopularCategoriesQuery();
  return (
    <div className="my-10">
      <h2 className="my-10 text-2xl text-center text-primary">Categorías Populares</h2>
      <Carousel className="w-full">
        <CarouselContent className="w-full">
          {categories.map((category) => (
            <CarouselItem className="basis-1/6" key={category.id}>
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
