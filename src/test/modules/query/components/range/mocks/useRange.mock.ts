import { useRange } from "react-instantsearch-core";

export const useRangeMock: ReturnType<typeof useRange> = {
  refine: vi.fn(),
  range: { min: undefined, max: undefined },
  canRefine: false,
  format: {
    from: vi.fn(),
    to: vi.fn()
  },
  sendEvent: vi.fn(),
  start: [undefined, undefined]
};
