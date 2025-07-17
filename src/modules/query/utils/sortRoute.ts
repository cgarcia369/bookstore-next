import { RouteState } from "@/modules/query/types/stateToRoute";
import { SORT_ITEMS } from "../constants/sortItems";

export const sortToQuery = (state?: string) => {
  if (!state) {
    return {};
  }
  const item = SORT_ITEMS.find((x) => x.algoliaIndex === state);
  if (!item) {
    return {};
  }
  return {
    sortBy: encodeURI(item.route)
  };
};
export const queryToSort = (query: Pick<RouteState, "sortBy">) => {
  const decoded = query.sortBy ? decodeURI(query.sortBy) : undefined;
  const item = SORT_ITEMS.find((x) => x.route === decoded);
  return item?.algoliaIndex || undefined;
};
