import * as React from "react";
import { beforeAll, expect } from "vitest";
import { usePagination } from "react-instantsearch-core";
import { render, screen } from "@testing-library/react";
import PaginationSearch from "@/modules/query/components/pagination/Pagination";
import { usePaginationMock } from "./mocks/usePagination.mock";

describe("Pagination", () => {
  beforeAll(() => {
    vi.mock("react-instantsearch-core", async () => {
      return {
        ...(await vi.importActual("react-instantsearch-core")),
        usePagination: vi.fn()
      };
    });
  });
  it("Should render ellipsis if pages > 10", () => {
    const pages = Array.from({ length: 11 }).map((_, i) => i);
    vi.mocked(usePagination).mockReturnValue({
      ...usePaginationMock,
      pages,
      createURL: (x) => x.toString()
    });
    const { container } = render(<PaginationSearch />);
    const ellipsis = container.querySelector('[data-slot="pagination-ellipsis"]');
    expect(ellipsis).toBeInTheDocument();

    const firstFourPages = pages.slice(0, 4);
    const lastFourPages = pages.slice(-4);
    const combined = [...firstFourPages, ...lastFourPages];
    const links = screen.getAllByRole("link", {
      name: /[0-9]/i
    });
    expect(links).toHaveLength(8);
    combined.forEach((page) => {
      const el = screen.getByRole("link", {
        name: (page + 1).toString()
      });
      expect(el).toHaveAttribute("href", page.toString());
      expect(el).toBeInTheDocument();
    });
  });
  it("Should not render ellipsis if pages <= 10", () => {
    const pages = Array.from({ length: 8 }).map((_, i) => i);
    vi.mocked(usePagination).mockReturnValue({
      ...usePaginationMock,
      pages,
      createURL: (x) => x.toString()
    });
    const { container } = render(<PaginationSearch />);
    const ellipsis = container.querySelector('[data-slot="pagination-ellipsis"]');
    expect(ellipsis).not.toBeInTheDocument();

    const links = screen.getAllByRole("link", {
      name: /[0-9]/i
    });
    expect(links).toHaveLength(8);
    pages.forEach((page) => {
      const el = screen.getByRole("link", {
        name: (page + 1).toString()
      });
      expect(el).toHaveAttribute("href", page.toString());
      expect(el).toBeInTheDocument();
    });
  });
  it("Should disable previous button if isfirst page", () => {
    vi.mocked(usePagination).mockReturnValue({
      ...usePaginationMock,
      isFirstPage: true,
      pages: [0, 1]
    });

    render(<PaginationSearch />);

    const prev = screen.getByRole("link", {
      name: /previous/i
    });
    expect(prev).toHaveClass("pointer-events-none");
    expect(prev).toHaveAttribute("href", "#");
  });
  it("Should disable next button if islast page", () => {
    vi.mocked(usePagination).mockReturnValue({
      ...usePaginationMock,
      isLastPage: true,
      pages: [0, 1]
    });

    render(<PaginationSearch />);

    const prev = screen.getByRole("link", {
      name: /next/i
    });
    expect(prev).toHaveClass("pointer-events-none");
    expect(prev).toHaveAttribute("href", "#");
  });
});
