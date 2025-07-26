import React from "react";
import { PanelDesktop, PanelDevice, Search, Hits, Sort, Pagination } from "@/modules/query";
export const dynamic = "force-dynamic";
const SearchPage = () => {
  return (
    <div className="flex flex-row w-full gap-x-2 md:gap-x-4">
      <PanelDesktop />
      <div className="flex flex-col flex-1 gap-y-4">
        <div className="flex flex-row w-full gap-x-2 md:gap-x-4">
          <Search />
          <Sort />
          {/* TODO: Test his component */}
          <PanelDevice />
        </div>
        <Hits />
        <Pagination />
      </div>
    </div>
  );
};

export default SearchPage;
