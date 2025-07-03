"use client";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useRefinementList } from "react-instantsearch";
import { Checkbox } from "@/components/ui/components/checkbox/checkbox";
import { Label } from "@/components/ui/components/label/label";
import RefineListSearch from "./components/RefineListSearch";
import RefineListMoreModal from "./components/RefineListMoreModal";
import { RefinementListItem } from "instantsearch.js/es/connectors/refinement-list/connectRefinementList";
import PanelItemWrapper from "@/components/query/components/panel/components/PanelItemWrapper";
type RefineListProps = {
  attribute: string;
  title: string;
};

const maxItems = 10;
const RefineList = ({ attribute, title }: RefineListProps) => {
  const [key, setKey] = useState<string>(uuidv4());
  const { items, refine, searchForItems } = useRefinementList({
    attribute,
    operator: "or",
    limit: Infinity
  });
  const handleChangeItem = (item: RefinementListItem) => {
    refine(item.value);
    handleClearSearch();
  };
  const handleClearSearch = () => {
    setKey(uuidv4());
  };
  const canToggleShowMore = items.length > maxItems;

  return (
    <PanelItemWrapper title={title}>
      <RefineListSearch key={key} onSearch={searchForItems} />
      <div className="flex flex-col gap-y-3">
        {items.slice(0, maxItems).map((item) => (
          <div key={item.label} className="flex items-center gap-x-2">
            <Checkbox
              checked={Boolean(item.isRefined)}
              onCheckedChange={() => {
                handleChangeItem(item);
              }}
              id={item.label}
            />
            <Label htmlFor={item.label} className="font-light">
              {item.label} ({item.count})
            </Label>
          </div>
        ))}
      </div>
      {canToggleShowMore && <RefineListMoreModal onClickItem={handleChangeItem} items={items} title={title} />}
    </PanelItemWrapper>
  );
};

export default RefineList;
