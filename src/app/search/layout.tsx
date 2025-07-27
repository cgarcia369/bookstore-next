import React, { ReactNode } from "react";

import { InstantSearch } from "@/modules/query";

const SearchLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-full h-full general-padding general-vertical-padding">
      <InstantSearch>{children}</InstantSearch>
    </div>
  );
};

export default SearchLayout;
