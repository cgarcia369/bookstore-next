import { RouteState, StateToRouteRangeProp } from "@/modules/query/types/stateToRoute";
import { rangeLists } from "@/modules/query/constants/rangeItems";

const minKeyword = "min";
const maxKeyword = "max";
export const rangeToQuery = (state?: StateToRouteRangeProp) => {
  if (!state) {
    return {};
  }
  return rangeLists.reduce(
    (acc, curr) => {
      const value = state[curr.attribute as keyof typeof state];
      if (!value) return acc;
      const [min, max] = value.split(":");
      const minText = `${minKeyword}-${min}`;
      const maxText = `${maxKeyword}-${max}`;
      acc[curr.queryName] = `${min ? minText : ""}${min && max ? "+" : ""}${max ? maxText : ""}`;
      return acc;
    },
    {} as Record<string, string>
  );
};
const findValueInText = (keyword: string, text: string): number | undefined => {
  const result = text.split(keyword + "-");
  if (result.length > 1) {
    return Number(result[1].slice(0, 2));
  }
  return undefined;
};
export const queryToRange = (query: Pick<RouteState, "price">) => {
  if (!query) {
    return {};
  }
  return rangeLists.reduce(
    (acc, curr) => {
      const value = query[curr.queryName as keyof typeof query];
      if (!value) {
        return acc;
      }
      const thereIsMin = value.includes(minKeyword);
      const thereIsMax = value.includes(maxKeyword);

      const min = thereIsMin ? findValueInText(minKeyword, value)! : undefined;
      const max = thereIsMax ? findValueInText(maxKeyword, value)! : undefined;

      acc[curr.attribute] = `${min}:${max}`;
      return acc;
    },
    {} as Record<string, string>
  );
};
