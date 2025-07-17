import { RouteState } from "@/modules/query/types/stateToRoute";

export const paginationToQuery = (state?: number) => {
  if (!state) {
    return {};
  }
  return {
    page: state.toString()
  };
};
export const queryToPagination = (query: Pick<RouteState, "page">) => {
  return query.page ? Number(query.page) : undefined;
};
