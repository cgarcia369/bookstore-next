import { RouteState } from "@/components/query/types/stateToRoute";

export const searchToQuery = (state?: string) => {
  if (!state) {
    return {};
  }
  return {
    q: encodeURI(state)
  };
};
export const queryToSearch = (query: Pick<RouteState, "q">) => {
  return query.q ? decodeURI(query.q) : undefined;
};
