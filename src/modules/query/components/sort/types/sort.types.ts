import { SortDirections } from "../enums/sort.enums";

export type SortItem = {
  label: string;
  defaultDirection?: SortDirections;
  isSelectedByDefault?: boolean;
  route: string;
};
export type AlgoliaSortItem = SortItem & {
  algoliaIndex: string;
};
