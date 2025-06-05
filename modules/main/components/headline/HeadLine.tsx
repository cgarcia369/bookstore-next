import React from "react";
import HeadLineLeftSide from "@/modules/main/components/headline/HeadLineLeftSide";
import HeadLineRightSide from "@/modules/main/components/headline/HeadLineRightSide";

const MyComponent = () => {
  return (
    <div className="flex flex-row items-center justify-between px-10 h-[700px] general-margin">
      <HeadLineLeftSide />
      <HeadLineRightSide />
    </div>
  );
};

export default MyComponent;
