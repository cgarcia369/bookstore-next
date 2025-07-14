import * as React from "react";
import { useRatingMenu } from "@/components/query/hooks/useRating";
import { render, screen } from "@testing-library/react";
import Rating from "@/components/query/components/rating/Rating";
import { RatingMenuRenderState } from "instantsearch.js/es/connectors/rating-menu/connectRatingMenu";

vi.mock("@/components/query/hooks/useRating");
const useRatingMenuMock: ReturnType<typeof useRatingMenu> = {
  items: [],
  refine: vi.fn(),
  canRefine: false,
  createURL: vi.fn(),
  sendEvent: vi.fn(),
  hasNoResults: false
};
const starsMock: RatingMenuRenderState["items"] = [
  {
    stars: [true, true, true, false, false],
    label: "4",
    isRefined: false,
    value: "4",
    count: 50,
    name: "4"
  }
];
describe("Rating", () => {
  it("Should show empty if can't refine", () => {
    vi.mocked(useRatingMenu).mockReturnValue({
      ...useRatingMenuMock
    });

    const { container } = render(<Rating />);
    expect(container).toBeEmpty();
  });
  it("Should show stars according to hook", () => {
    vi.mocked(useRatingMenu).mockReturnValue({
      ...useRatingMenuMock,
      canRefine: true,
      items: starsMock,
      createURL: (a) => a
    });

    render(<Rating />);
    for (const start of starsMock) {
      const reg = new RegExp(`${start.label}`, "i");
      const el = screen.getByText(reg);
      const link = screen.getByRole("link", {
        name: reg
      });
      expect(link).toHaveAttribute("href", start.value);
      expect(link).toBeInTheDocument();
      expect(el).toBeInTheDocument();
    }
  });
  it("Should show go back button if there is a item selected", async () => {
    const refineMock = vi.fn();
    vi.mocked(useRatingMenu).mockReturnValue({
      ...useRatingMenuMock,
      canRefine: true,
      items: [
        {
          ...starsMock[0],
          isRefined: true
        }
      ],
      refine: refineMock,
      createURL: (a) => a
    });

    render(<Rating />);

    const button = screen.getByRole("link", {
      name: /atrás/i
    });

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("href", starsMock[0].value);
  });
});
