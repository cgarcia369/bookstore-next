import { useMemo } from "react";
import { useSortBy } from "react-instantsearch-core";

type useSortByCustomizedProps = Parameters<typeof useSortBy>[0];

const useSortByCustomized = ({ ...props }: useSortByCustomizedProps) => {
  const { currentRefinement, ...rest } = useSortBy(props);
  const fixedCurrentRefinement = useMemo(() => {
    if (!props.items.find((x) => x.value === currentRefinement)) {
      return undefined;
    }
    return currentRefinement;
  }, [currentRefinement, props.items]);
  return {
    currentRefinement: fixedCurrentRefinement,
    ...rest
  };
};

export default useSortByCustomized;
