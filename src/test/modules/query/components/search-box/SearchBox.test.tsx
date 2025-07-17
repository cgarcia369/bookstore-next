import * as React from "react";
import { useSearchBox } from "react-instantsearch-core";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import SearchBox from "@/modules/query/components/search-box/SearchBox";
import { expect } from "vitest";
import { userEvent } from "@testing-library/user-event";
const useSearchBoxMock: ReturnType<typeof useSearchBox> = {
  query: "",
  clear: vi.fn(),
  refine: vi.fn(),
  isSearchStalled: false
};
describe("SearchBox", () => {
  beforeAll(() => {
    vi.mock("react-instantsearch-core", async () => {
      return {
        ...(await vi.importActual("react-instantsearch-core")),
        useSearchBox: vi.fn()
      };
    });
  });
  it("Should call refine with values if click on search icon or hit enter", async () => {
    const refineMock = vi.fn();
    vi.mocked(useSearchBox).mockReturnValue({
      ...useSearchBoxMock,
      refine: refineMock
    });
    const user = userEvent.setup();

    const { container } = render(<SearchBox />);

    const form = container.querySelector("form");
    const input = screen.getByPlaceholderText(/buscar/i);
    const searchButton = screen.getByRole("button", {
      name: /search/i
    });
    const value = "Test";

    await user.type(input, value);
    await user.click(searchButton);

    expect(form).toBeInTheDocument();
    fireEvent.submit(form!);

    await waitFor(() => {
      expect(refineMock).toHaveBeenCalledWith(value);
    });

    await user.type(input, "2{enter}");

    await waitFor(() => {
      expect(refineMock).toHaveBeenCalledWith(value + "2");
    });
  });
});
