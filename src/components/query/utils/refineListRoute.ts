import { refineLists } from "../constants/refinelistItems";
import { RouteState, StateToRouteRefineListProp } from "@/components/query/types/stateToRoute";
import { denormalizeWord, normalizeWord } from "@/components/query/utils/stateToRoute";

export const transformArrayToQuery = (key: string, values: string[] | undefined) => {
  if (!values) {
    return {};
  }
  return values.reduce(
    (acc, value) => {
      const alreadyExists = acc[key];
      if (alreadyExists) {
        acc[key] += `+${normalizeWord(value)}`;
        return acc;
      }
      acc[key] = normalizeWord(value);
      return acc;
    },
    {} as Record<string, string>
  );
};
export const transformQueryToArray = (key: string, value: string | undefined) => {
  if (!value) {
    return {};
  }
  const values = value.split("+");
  const denormalizedValues = values.map((x) => denormalizeWord(x));
  return {
    [key]: denormalizedValues
  };
};

export const refineListToQuery = (state?: StateToRouteRefineListProp) => {
  if (!state) {
    return {};
  }
  return refineLists.reduce(
    (acc, refineItem) => {
      const valueInState = state[refineItem.attribute as keyof StateToRouteRefineListProp];
      const arrayQuery = transformArrayToQuery(refineItem.queryName, valueInState);
      return {
        ...acc,
        ...arrayQuery
      };
    },
    {} as Record<string, string>
  );
};
export const queryToRefineList = (state: Pick<RouteState, "category" | "authors">) => {
  return refineLists.reduce(
    (acc, refineListItem) => {
      const queryValue = state[refineListItem.queryName as keyof typeof state];
      return {
        ...acc,
        ...transformQueryToArray(refineListItem.attribute, queryValue)
      };
    },
    {} as Record<string, string[]>
  );
};
