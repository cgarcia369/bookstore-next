"use client";
import * as React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select/select";
import useSortByCustomized from "./hooks/useSortByCustomized";
import { SORT_ITEMS } from "@/modules/query/constants/sortItems";

const defaultOption = SORT_ITEMS[0];
const Sort = () => {
  const { refine, currentRefinement, canRefine, options } = useSortByCustomized({
    items: SORT_ITEMS.flatMap((sortItem) => ({
      label: sortItem.label,
      value: sortItem.algoliaIndex
    }))
  });
  return (
    <Select
      disabled={!canRefine}
      value={currentRefinement || defaultOption.algoliaIndex}
      defaultValue={defaultOption.algoliaIndex}
      onValueChange={(index) => {
        refine(index);
      }}
    >
      <SelectTrigger className="w-[250px]">
        <SelectValue placeholder="Orden" />
      </SelectTrigger>
      <SelectContent>
        {options.map((sort) => (
          <SelectItem value={sort.value} key={sort.value}>
            {sort.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default Sort;
