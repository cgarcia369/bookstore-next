"use client";
import Stars from "@/components/ui/stars/Stars";
import React from "react";
import { useRatingMenu } from "@/modules/query/components/rating/hooks/useRating";
import { ratingObj } from "@/modules/query/constants/ratingItems";
import PanelItemWrapper from "../panel/components/PanelItemWrapper";
import Link from "next/link";

type RatingProps = {
  className?: string;
};
const Rating = ({ className }: RatingProps) => {
  const { items, canRefine, createURL } = useRatingMenu({
    attribute: ratingObj.rating.attribute
  });
  if (!canRefine) return null;
  const someItemIsRefined = items.find((x) => x.isRefined);
  const itemsFixed = someItemIsRefined ? items.filter((x) => x.isRefined) : items;
  return (
    <PanelItemWrapper className={className} title={ratingObj.rating.title}>
      {someItemIsRefined && (
        <Link href={createURL(someItemIsRefined.value)}>
          <div className="text-sm cursor-pointer">{"<"} Atrás</div>
        </Link>
      )}
      {itemsFixed.map((starItem) => {
        return (
          <Link href={createURL(starItem.value)} key={starItem.label}>
            <Stars
              activeStars={starItem.stars.filter((x) => x).reduce((acc) => acc + 1, 0)}
              halfStars={0}
              inactiveStars={starItem.stars.filter((x) => !x).reduce((acc) => acc + 1, 0)}
              label={`${starItem.label} y superior`}
              isActive={starItem.isRefined}
            />
          </Link>
        );
      })}
    </PanelItemWrapper>
  );
};

export default Rating;
