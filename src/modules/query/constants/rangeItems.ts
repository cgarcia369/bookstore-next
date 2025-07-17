import { ItemAccessor } from "@/modules/query/types/propertyAccessor";

export const rangeObj: Record<string, ItemAccessor> = {
  price: {
    attribute: "price",
    title: "Precio",
    queryName: "price"
  }
};
export const rangeLists = Object.values(rangeObj);
