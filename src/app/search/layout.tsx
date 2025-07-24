import React, { ReactNode } from "react";

import { InstantSearch } from "@/modules/query";

const SearchLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-full h-full general-padding py-2 mb-4 lg:mb-0 lg:py-10">
      <InstantSearch>{children}</InstantSearch>
    </div>
  );
};

export default SearchLayout;
