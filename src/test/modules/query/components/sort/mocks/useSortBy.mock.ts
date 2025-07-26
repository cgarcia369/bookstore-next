import { useSortBy } from "react-instantsearch-core";

export const useSortByMock: ReturnType<typeof useSortBy> = {
  refine: vi.fn(),
  canRefine: false,
  currentRefinement: "",
  initialIndex: undefined,
  hasNoResults: true,
  options: []
};

export const testOptions = [
  {
    label: "Test label",
    value: "Test_value"
  }
];
