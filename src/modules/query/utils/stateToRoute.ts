import { RouteState, StateToRouteProp } from "@/modules/query/types/stateToRoute";
import { UiState } from "instantsearch.js";
import { algoliaMainIndex } from "@/constants/algoliaMainIndex";
import { queryToRefineList, refineListToQuery } from "./refineListRoute";
import { queryToRange, rangeToQuery } from "@/modules/query/utils/rangeRoute";
import { queryToRating, ratingToQuery } from "./ratingRoute";
import { queryToSearch, searchToQuery } from "@/modules/query/utils/queryRoute";
import { queryToSort, sortToQuery } from "@/modules/query/utils/sortRoute";
import { paginationToQuery, queryToPagination } from "@/modules/query/utils/paginationRoute";

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
    ...searchToQuery(state.books_index.query),
    ...sortToQuery(state.books_index.sortBy),
    ...paginationToQuery(state.books_index.page)
  };
  return obj;
};

export const routeToState = (routeState: RouteState): UiState => {
  const { q, price, authors, category, rating, sortBy, page } = routeState;
  const obj2 = {
    [algoliaMainIndex]: {
      refinementList: queryToRefineList({ authors, category }),
      range: queryToRange({ price }),
      ratingMenu: queryToRating({ rating }),
      query: queryToSearch({ q }),
      sortBy: queryToSort({ sortBy }),
      page: queryToPagination({ page })
    }
  };
  return obj2;
};
