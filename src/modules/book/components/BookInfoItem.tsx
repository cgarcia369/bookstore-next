import React from "react";

type BookInfoItemProps = {
  title: string;
  value: string;
};

const BookInfoItem = ({ title, value }: BookInfoItemProps) => {
  return (
    <div className="flex flex-row w-full gap-x-4 ">
      <p className="text-base text-gray-800 w-[150px]">{title}:</p>
      <p className="text-base text-gray-600">{value}</p>
    </div>
  );
};

export default BookInfoItem;
