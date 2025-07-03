import React, { ReactNode } from "react";

import { InstantSearch } from "@/components/query";

const SearchLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-full h-full general-padding py-10">
      <InstantSearch>{children}</InstantSearch>
    </div>
  );
};

export default SearchLayout;
