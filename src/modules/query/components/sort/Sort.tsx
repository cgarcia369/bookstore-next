"use client";
import * as React from "react";
import useSortByCustomized from "./hooks/useSortByCustomized";
import { SORT_ITEMS } from "@/modules/query/constants/sortItems";
import { useIsMobile } from "@/hooks/useIsMobile";
import SortDesktop from "./SortDesktop";
import SortDevice from "./SortDevice";

const Sort = () => {
  const { ...sort } = useSortByCustomized({
    items: SORT_ITEMS.flatMap((sortItem) => ({
      label: sortItem.label,
      value: sortItem.algoliaIndex
    }))
  });
  const isMobile = useIsMobile();
  if (!isMobile && false) {
    return <SortDesktop {...sort} />;
  }
  return <SortDevice {...sort} />;
};

export default Sort;
