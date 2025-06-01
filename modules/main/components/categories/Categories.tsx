import React from "react";
import CategoryItem from "@/modules/main/components/categories/CategoryItem";

const categoriesList = [
  {
    imageUrl: "/img/categories/fiction.jpg",
    title: "Ficción",
    url: "/categories/fiction",
    alt: "Ficción"
  },
  {
    imageUrl: "https://picsum.photos/200/300",
    title: "No Ficción",
    url: "/categories/non-fiction",
    alt: "No Ficción"
  },
  {
    imageUrl: "https://picsum.photos/200/300",
    title: "Ciencia",
    url: "/categories/science",
    alt: "Ciencia"
  },
  {
    imageUrl: "https://picsum.photos/200/300",
    title: "Historia",
    url: "/categories/history",
    alt: "Historia"
  }
];
const Categories = () => {
  return (
    <div className="flex justify-evenly my-10">
      {categoriesList.map((category, index) => (
        <CategoryItem
          key={index}
          imageUrl={category.imageUrl}
          title={category.title}
          url={category.url}
          alt={category.alt}
        />
      ))}
    </div>
  );
};

export default Categories;
