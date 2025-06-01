import React from "react";
import Image from "next/image";

const HeadLineLeftSide = () => {
  return (
    <Image
      src="/img/headline/headlinemainimage.png"
      width={1000}
      height={1000}
      alt={"Head line image"}
      className="w-[550px] h-[550px] object-cover"
    />
  );
};

export default HeadLineLeftSide;
