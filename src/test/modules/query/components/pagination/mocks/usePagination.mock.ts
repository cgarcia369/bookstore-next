import { usePagination } from "react-instantsearch-core";

export const usePaginationMock: ReturnType<typeof usePagination> = {
  refine: vi.fn(),
  createURL: () => "",
  isLastPage: false,
  canRefine: false,
  currentRefinement: 0,
  pages: [0, 1],
  isFirstPage: true,
  nbHits: 100,
  nbPages: 2
};
