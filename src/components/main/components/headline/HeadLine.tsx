import React from "react";
import HeadLineLeftSide from "./HeadLineLeftSide";
import HeadLineRightSide from "./HeadLineRightSide";

const MyComponent = () => {
  return (
    <div className="flex flex-row items-center justify-between px-2 lg:px-10 h-[700px] general-margin">
      <HeadLineLeftSide />
      <HeadLineRightSide />
    </div>
  );
};

export default MyComponent;
