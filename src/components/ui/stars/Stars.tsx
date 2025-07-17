import React from "react";
import { MdOutlineStarBorder } from "react-icons/md";
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarHalf } from "react-icons/md";

export type StarsProps = {
  activeStars: number;
  halfStars: number;
  inactiveStars: number;
  label: string;
  isActive: boolean;
};

const starClasses = "fill-current text-yellow-400";
const Stars = ({ halfStars, inactiveStars, activeStars, label }: StarsProps) => {
  return (
    <div className="flex gap-x-4 cursor-pointer items-center">
      {Array.from({ length: activeStars }).map((_, i) => {
        return <MdOutlineStar className={starClasses} key={`active-star-${i}`} size={15} />;
      })}
      {Array.from({ length: halfStars }).map((_, i) => {
        return <MdOutlineStarHalf className={starClasses} key={`active-star-${i}`} size={15} />;
      })}
      {Array.from({ length: inactiveStars }).map((_, i) => {
        return <MdOutlineStarBorder className={starClasses} key={`active-star-${i}`} size={15} />;
      })}
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  );
};

export default Stars;
