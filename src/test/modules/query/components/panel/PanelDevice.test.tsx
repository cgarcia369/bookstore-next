import * as React from "react";
import PanelDevice from "@/modules/query/components/panel/PanelDevice";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { useRange } from "react-instantsearch-core";
import { useRangeMock } from "../range/mocks/useRange.mock";
import { starsMock, useRatingMenuMock } from "../rating/mocks/useRatingMenu.mock";
import { useRatingMenu } from "@/modules/query/components/rating/hooks/useRating";

describe("Paneldevice", () => {
  beforeAll(async () => {
    vi.mock("react-instantsearch-core", async () => {
      return {
        ...(await vi.importActual("react-instantsearch-core")),
        useRange: vi.fn()
      };
    });
    vi.mock("@/modules/query/components/rating/hooks/useRating");
  });
  it("Should open modal with items on press button", async () => {
    render(<PanelDevice />);

    const button = screen.getByRole("button");

    const user = userEvent.setup();
    await user.click(button);

    const title = screen.getByRole("heading");

    expect(title).toHaveTextContent(/Filtros/gi);
  });
  it("Should expand item on click and close on click again", async () => {
    vi.mocked(useRange).mockReturnValue({
      ...useRangeMock,
      range: {
        min: 1,
        max: 100
      }
    });
    render(<PanelDevice />);

    const button = screen.getByRole("button");

    const user = userEvent.setup();
    await user.click(button);

    const itemButton = screen.getByText(/precio/i);

    await user.click(itemButton);

    const title = screen.getByRole("heading", {
      name: /precio/i
    });
    expect(title).toBeInTheDocument();

    await user.click(itemButton);
    const titleSecond = screen.queryByRole("heading", {
      name: /precio/i
    });
    expect(titleSecond).not.toBeInTheDocument();
  });
  it("Should close item on click another item", async () => {
    vi.mocked(useRange).mockReturnValue({
      ...useRangeMock,
      range: {
        min: 1,
        max: 100
      }
    });

    vi.mocked(useRatingMenu).mockReturnValue({
      ...useRatingMenuMock,
      canRefine: true,
      items: starsMock,
      createURL: (a) => a
    });

    render(<PanelDevice />);

    const button = screen.getByRole("button");

    const user = userEvent.setup();
    await user.click(button);

    const itemButton = screen.getByText(/precio/i);

    await user.click(itemButton);

    const title = screen.getByRole("heading", {
      name: /precio/i
    });
    expect(title).toBeInTheDocument();

    const anotheritembutton = screen.getByText(/opinion/gi);

    await user.click(anotheritembutton);

    const titleSecond = screen.queryByRole("heading", {
      name: /precio/i
    });
    expect(titleSecond).not.toBeInTheDocument();
  });
});
