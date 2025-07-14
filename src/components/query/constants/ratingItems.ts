import { ItemAccessor } from "@/components/query/types/propertyAccessor";

export const ratingObj: Record<string, ItemAccessor> = {
  rating: {
    attribute: "avgRating",
    title: "Opiniones",
    queryName: "rating"
  }
};
export const ratingList = Object.values(ratingObj);
