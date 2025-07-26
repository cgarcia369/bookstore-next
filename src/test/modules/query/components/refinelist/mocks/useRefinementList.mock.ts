import { useRefinementList } from "react-instantsearch-core";

export const useRefinementListMock: ReturnType<typeof useRefinementList> = {
  canRefine: false,
  refine: vi.fn(),
  searchForItems: vi.fn(),
  items: [],
  canToggleShowMore: false,
  createURL: vi.fn(),
  toggleShowMore: vi.fn(),
  isFromSearch: false,
  sendEvent: vi.fn(),
  isShowingMore: false,
  hasExhaustiveItems: false
};
export const itemsMock = Array.from({
  length: 50
}).map((_, i) => ({
  value: `Test ${i}`,
  label: `Test ${i}`,
  count: i,
  isRefined: false
}));
