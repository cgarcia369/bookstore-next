import { RouteState, StateToRouteProp } from "@/components/query/types/stateToRoute";
import { UiState } from "instantsearch.js";
import { algoliaMainIndex } from "@/constants/algoliaMainIndex";
import { queryToRefineList, refineListToQuery } from "./refineListRoute";
import { queryToRange, rangeToQuery } from "@/components/query/utils/rangeRoute";
import { queryToRating, ratingToQuery } from "./ratingRoute";
import { queryToSearch, searchToQuery } from "@/components/query/utils/queryRoute";

export const normalizeWord = (word: string) => {
  return word.replaceAll(" ", "-");
};
export const denormalizeWord = (word: string) => {
  return word.replaceAll("-", " ");
};

export const stateToRoute = (state: StateToRouteProp): RouteState => {
  const obj = {
    ...refineListToQuery(state.books_index.refinementList),
    ...rangeToQuery(state.books_index.range),
    ...ratingToQuery(state.books_index.ratingMenu),
    ...searchToQuery(state.books_index.query)
  };
  return obj;
};

export const routeToState = (routeState: RouteState): UiState => {
  const { q, price, authors, category, rating } = routeState;
  const obj2 = {
    [algoliaMainIndex]: {
      refinementList: queryToRefineList({ authors, category }),
      range: queryToRange({ price }),
      ratingMenu: queryToRating({ rating }),
      query: queryToSearch({ q })
    }
  };
  return obj2;
};
