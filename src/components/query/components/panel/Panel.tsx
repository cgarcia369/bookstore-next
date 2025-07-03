import React from "react";
import RefineList from "../refinelist/RefineList";
import { refineLists } from "../../constants/refinelistItems";
import Range from "../range/Range";
import { rangeObj } from "../../constants/rangeItems";
const BooksSearchPanel = () => {
  return (
    <div className="flex flex-col gap-y-6 max-w-[250px]">
      <Range title={rangeObj.price.title} attribute={rangeObj.price.attribute} />
      {refineLists.map((refineList) => (
        <RefineList {...refineList} key={refineList.attribute} />
      ))}
    </div>
  );
};

export default BooksSearchPanel;
