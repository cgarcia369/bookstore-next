import React from "react";
import { Panel, Search, Hits } from "@/components/query";
export const dynamic = "force-dynamic";
const SearchPage = () => {
  return (
    <div className="flex flex-row w-full gap-x-4">
      <Panel />
      <div className=" flex flex-col flex-1 gap-y-4">
        <Search />
        <Hits />
      </div>
    </div>
  );
};

export default SearchPage;
