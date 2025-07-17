import * as React from "react";
import { useSortBy } from "react-instantsearch-core";
import { render, screen, waitFor } from "@testing-library/react";
import Sort from "@/modules/query/components/sort/Sort";
import { expect } from "vitest";
import { userEvent } from "@testing-library/user-event";
const useSortByMock: ReturnType<typeof useSortBy> = {
  refine: vi.fn(),
  canRefine: false,
  currentRefinement: "",
  initialIndex: undefined,
  hasNoResults: true,
  options: []
};
const testOptions = [
  {
    label: "Test label",
    value: "Test_value"
  }
];
describe("Sort", () => {
  beforeAll(() => {
    vi.mock("react-instantsearch-core", async () => {
      return {
        ...(await vi.importActual("react-instantsearch-core")),
        useSortBy: vi.fn()
      };
    });
  });
  it("Should render options", async () => {
    vi.mocked(useSortBy).mockReturnValue({
      ...useSortByMock,
      options: testOptions,
      canRefine: true
    });

    render(<Sort />);

    const select = screen.getByRole("combobox");
    const user = userEvent.setup();
    await user.click(select);
    const options = screen.queryAllByRole("option");

    expect(options).toHaveLength(1);
    options.forEach((option, index) => {
      expect(option).toHaveTextContent(testOptions[index].label);
    });
  });
  it("Should disable select if can't refine", () => {
    vi.mocked(useSortBy).mockReturnValue({
      ...useSortByMock
    });
    render(<Sort />);
    const select = screen.getByRole("combobox");
    expect(select).toBeDisabled();
  });
  it("Should call refine when selecting a option", async () => {
    const refineMock = vi.fn();
    vi.mocked(useSortBy).mockReturnValue({
      ...useSortByMock,
      options: testOptions,
      refine: refineMock,
      canRefine: true
    });
    const user = userEvent.setup();

    render(<Sort />);
    const select = screen.getByRole("combobox");
    await user.click(select);
    const firstOption = screen.getAllByRole("option")[0];
    await user.click(firstOption);

    expect(refineMock).toHaveBeenCalledWith(testOptions[0].value);
  });
});
