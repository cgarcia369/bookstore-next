import * as React from "react";
import { useRefinementList } from "react-instantsearch";
import { beforeAll } from "vitest";
import RefineList from "@/modules/query/components/refinelist/RefineList";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { userEvent } from "@testing-library/user-event";

const useRefinementListMock: ReturnType<typeof useRefinementList> = {
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
const itemsMock = Array.from({
  length: 50
}).map((_, i) => ({
  value: `Test ${i}`,
  label: `Test ${i}`,
  count: i,
  isRefined: false
}));

describe("RefineList", () => {
  beforeAll(() => {
    vi.mock("react-instantsearch", async () => {
      const actual = await vi.importActual("react-instantsearch");
      return {
        ...actual,
        useRefinementList: vi.fn()
      };
    });
  });
  it("Should show listed items (first 10)", () => {
    vi.mocked(useRefinementList).mockReturnValue({
      ...useRefinementListMock,
      items: itemsMock
    });
    render(<RefineList attribute={"test"} title={"TestTitle"} />);
    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent("TestTitle");

    for (const item of itemsMock.slice(0, 10)) {
      const el = screen.getByText(`${item.label} (${item.count})`);
      expect(el).toBeInTheDocument();
    }
  });
  it("Should show more if canRefine and items > 10", () => {
    vi.mocked(useRefinementList).mockReturnValue({
      ...useRefinementListMock,
      items: itemsMock,
      canRefine: true
    });
    render(<RefineList attribute={"test"} title={"TestTitle"} />);
    const showMore = screen.getByText(/más/i);
    expect(showMore).toBeInTheDocument();
  });
  it("Shouldn't show more if canRefine and items < 10", () => {
    vi.mocked(useRefinementList).mockReturnValue({
      ...useRefinementListMock,
      items: itemsMock.slice(0, 5),
      canRefine: true
    });
    render(<RefineList attribute={"test"} title={"TestTitle"} />);
    const showMore = screen.queryByText(/más/i);
    expect(showMore).not.toBeInTheDocument();
  });
  it("Should show modal with complete items if press show more", async () => {
    vi.mocked(useRefinementList).mockReturnValue({
      ...useRefinementListMock,
      items: itemsMock,
      canRefine: true
    });
    render(<RefineList attribute={"test"} title={"TestTitle"} />);
    const user = userEvent.setup();
    const showMore = screen.getByText(/más/i);

    await user.click(showMore);

    for (const item of itemsMock) {
      const el = screen.getByText(item.label);
      expect(el).toBeVisible();
    }
  });
  it("Should close modal when select item", async () => {
    const refineMock = vi.fn();
    vi.mocked(useRefinementList).mockReturnValue({
      ...useRefinementListMock,
      items: itemsMock,
      canRefine: true,
      refine: refineMock
    });

    render(<RefineList attribute={"test"} title={"TestTitle"} />);
    const user = userEvent.setup();

    const showMore = screen.getByText(/más/i);
    await user.click(showMore);

    const modalItem = screen.queryByText(itemsMock[11]!.label);
    await user.click(modalItem!);
    expect(modalItem).not.toBeInTheDocument();
  });
  it("Should call refine if select any item", async () => {
    const refineMock = vi.fn();
    vi.mocked(useRefinementList).mockReturnValue({
      ...useRefinementListMock,
      items: itemsMock,
      canRefine: true,
      refine: refineMock
    });

    const firstTenItems = itemsMock.slice(0, 10);

    render(<RefineList attribute={"test"} title={"TestTitle"} />);
    const user = userEvent.setup();

    for (const item of firstTenItems) {
      const el = screen.getByText(`${item.label} (${item.count})`);
      await user.click(el);
      expect(refineMock).toHaveBeenCalledWith(item.value);
    }

    const openModal = async () => {
      const showMore = screen.getByText(/más/i);
      await user.click(showMore);
    };
    await openModal();

    for (const item of itemsMock) {
      const el = screen.getByText(item.label);
      await user.click(el);
      expect(refineMock).toHaveBeenCalledWith(item.value);
      await openModal();
    }
  });
  it("Should show items in modal order by alphabet", async () => {
    vi.mocked(useRefinementList).mockReturnValue({
      ...useRefinementListMock,
      items: itemsMock,
      canRefine: true
    });

    render(<RefineList attribute={"test"} title={"TestTitle"} />);
    const user = userEvent.setup();

    const showMore = screen.getByText(/más/i);
    await user.click(showMore);

    const letters = itemsMock.reduce((acc, curr) => {
      acc.push(curr.label.substring(0, 1));
      acc = [...new Set(acc)];
      return acc;
    }, [] as string[]);

    for (const letter of letters) {
      const el = screen.getByRole("heading", {
        name: letter
      });
      expect(el).toBeInTheDocument();
    }
  });
  it("Should filter list by searchbox term", async () => {
    const searchForItemsMock = vi.fn();
    vi.mocked(useRefinementList).mockReturnValue({
      ...useRefinementListMock,
      items: itemsMock,
      canRefine: true,
      searchForItems: searchForItemsMock
    });

    render(<RefineList attribute={"test"} title={"TestTitle"} />);
    const user = userEvent.setup();

    const search = screen.getByPlaceholderText(/buscar/i);

    await user.type(search, "Test 39");

    await waitFor(() => {
      expect(searchForItemsMock).toBeCalledWith("Test 39");
    });
  });
  it("Should clear searchbox if select item", async () => {
    vi.mocked(useRefinementList).mockReturnValue({
      ...useRefinementListMock,
      items: itemsMock,
      canRefine: true
    });

    render(<RefineList attribute={"test"} title={"TestTitle"} />);
    const user = userEvent.setup();

    const search = screen.getByPlaceholderText(/buscar/i);

    await user.type(search, "Test 39");
    const firstItem = screen.getByText(`${itemsMock[0].label} (${itemsMock[0].count})`);
    await user.click(firstItem);
    await waitFor(() => {
      const search = screen.getByPlaceholderText(/buscar/i);
      expect(search).toHaveValue("");
    });
  });
});
