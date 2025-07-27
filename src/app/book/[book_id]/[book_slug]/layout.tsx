import React, { ReactNode } from "react";

const BookLayout = ({ children }: { children: ReactNode }) => {
  return <div className="flex w-full h-full general-padding general-vertical-padding">{children}</div>;
};

export default BookLayout;
