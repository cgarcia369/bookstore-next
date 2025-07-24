import { useEffect, useMemo } from "react";
import { useSortBy } from "react-instantsearch-core";
import { defaultOption } from "../constants/sort.constants";

type useSortByCustomizedProps = Parameters<typeof useSortBy>[0];

const useSortByCustomized = ({ ...props }: useSortByCustomizedProps) => {
  const { currentRefinement, ...rest } = useSortBy(props);
  const fixedCurrentRefinement = useMemo(() => {
    if (!props.items.find((x) => x.value === currentRefinement)) {
      return undefined;
    }
    return currentRefinement;
  }, [currentRefinement, props.items]);

  useEffect(() => {
    rest.refine(defaultOption.algoliaIndex);
  }, []);

  return {
    currentRefinement: fixedCurrentRefinement,
    ...rest
  };
};

export default useSortByCustomized;
