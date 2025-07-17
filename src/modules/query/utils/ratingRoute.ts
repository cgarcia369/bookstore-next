import { RouteState, StateToRouteRatingProp } from "@/modules/query/types/stateToRoute";
import { ratingList } from "../constants/ratingItems";

export const ratingToQuery = (state?: StateToRouteRatingProp) => {
  if (!state) {
    return {};
  }
  return ratingList.reduce(
    (acc, curr) => {
      const value = state[curr.attribute as keyof typeof state];
      if (!value) return acc;
      acc[curr.queryName] = value.toString();
      return acc;
    },
    {} as Record<string, string>
  );
};
export const queryToRating = (query: Pick<RouteState, "rating">) => {
  if (!query) {
    return {};
  }
  return ratingList.reduce(
    (acc, curr) => {
      const value = query[curr.queryName as keyof typeof query];
      if (!value) {
        return acc;
      }
      acc[curr.attribute] = Number(value);
      return acc;
    },
    {} as Record<string, number>
  );
};
