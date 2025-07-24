import { SortDirections } from "../enums/sort.enums";
import useSortByCustomized from "../hooks/useSortByCustomized";

export type SortItem = {
  label: string;
  defaultDirection?: SortDirections;
  isSelectedByDefault?: boolean;
  route: string;
};
export type AlgoliaSortItem = SortItem & {
  algoliaIndex: string;
};

export type SortComponentProps = Pick<
  ReturnType<typeof useSortByCustomized>,
  "refine" | "options" | "canRefine" | "currentRefinement"
>;
