import { useRatingMenu } from "@/modules/query/components/rating/hooks/useRating";
import { RatingMenuRenderState } from "instantsearch.js/es/connectors/rating-menu/connectRatingMenu";

export const useRatingMenuMock: ReturnType<typeof useRatingMenu> = {
  items: [],
  refine: vi.fn(),
  canRefine: false,
  createURL: vi.fn(),
  sendEvent: vi.fn(),
  hasNoResults: false
};
export const starsMock: RatingMenuRenderState["items"] = [
  {
    stars: [true, true, true, false, false],
    label: "4",
    isRefined: false,
    value: "4",
    count: 50,
    name: "4"
  }
];
