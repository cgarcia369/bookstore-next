import { RouteState, StateToRouteProp } from "@/components/query/types/stateToRoute";
import { UiState } from "instantsearch.js";
import { algoliaMainIndex } from "@/constants/algoliaMainIndex";
import { queryToRefineList, refineListToQuery } from "./refineListRoute";
import { queryToRange, rangeToQuery } from "@/components/query/utils/rangeRoute";

export const normalizeWord = (word: string) => {
  return word.replaceAll(" ", "-");
};
export const denormalizeWord = (word: string) => {
  return word.replaceAll("-", " ");
};

export const stateToRoute = (state: StateToRouteProp): RouteState => {
  const obj = {
    ...refineListToQuery(state.books_index.refinementList),
    ...rangeToQuery(state.books_index.range)
  };
  return obj;
};

export const routeToState = (routeState: RouteState): UiState => {
  const { q: _, price, authors, category } = routeState;
  const obj2 = {
    [algoliaMainIndex]: {
      refinementList: queryToRefineList({ authors, category }),
      range: queryToRange({ price })
    }
  };
  return obj2;
};
