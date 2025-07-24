import React from "react";
import { SortComponentProps } from "./types/sort.types";
import { Select, SelectContent, SelectTrigger, SelectItem, SelectValue } from "@/components/ui/select/select";
import { defaultOption } from "./constants/sort.constants";

const SortDesktop = ({ refine, canRefine, options, currentRefinement }: SortComponentProps) => {
  return (
    <Select
      disabled={!canRefine}
      value={currentRefinement || defaultOption.algoliaIndex}
      defaultValue={defaultOption.algoliaIndex}
      onValueChange={(index) => {
        refine(index);
      }}
    >
      <SelectTrigger className="w-[250px] hidden md:inline-flex">
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

export default SortDesktop;
