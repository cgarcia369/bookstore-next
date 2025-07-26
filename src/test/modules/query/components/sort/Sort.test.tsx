import * as React from "react";
import { useSortBy } from "react-instantsearch-core";
import { render, screen } from "@testing-library/react";
import Sort from "@/modules/query/components/sort/Sort";
import { userEvent } from "@testing-library/user-event";
import { useIsMobile } from "@/hooks/useIsMobile";
import { testOptions, useSortByMock } from "./mocks/useSortBy.mock";

describe("Sort", () => {
  beforeAll(() => {
    vi.mock("react-instantsearch-core", async () => {
      return {
        ...(await vi.importActual("react-instantsearch-core")),
        useSortBy: vi.fn()
      };
    });
    vi.mock("@/hooks/useIsMobile", async () => {
      return {
        ...(await vi.importActual("@/hooks/useIsMobile")),
        useIsMobile: vi.fn().mockReturnValue(false)
      };
    });
  });
  describe("Device", () => {
    beforeEach(() => {
      vi.mocked(useIsMobile).mockReturnValue(true);
    });
    it("Device: Should open dialog if press button", async () => {
      vi.mocked(useSortBy).mockReturnValue({
        ...useSortByMock,
        options: testOptions,
        canRefine: true
      });
      render(<Sort />);

      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();

      const user = userEvent.setup();

      await user.click(button);

      const title = screen.getByRole("heading", {
        name: /orden/gi
      });

      expect(title).toBeInTheDocument();
    });
    it("Device: Should render options", async () => {
      vi.mocked(useSortBy).mockReturnValue({
        ...useSortByMock,
        options: testOptions,
        canRefine: true
      });

      render(<Sort />);

      const button = screen.getByRole("button");
      const user = userEvent.setup();
      await user.click(button);

      const options = screen.getAllByRole("listitem");

      expect(options).toHaveLength(testOptions.length);
      options.forEach((item, index) => {
        expect(item).toHaveTextContent(testOptions[index].label);
      });
    });

    it("Device: Should disable options if can't refine", async () => {
      const refineFn = vi.fn();

      vi.mocked(useSortBy).mockReturnValue({
        ...useSortByMock,
        options: testOptions,
        canRefine: false,
        refine: refineFn
      });

      render(<Sort />);

      const button = screen.getByRole("button");
      const user = userEvent.setup();
      await user.click(button);

      const options = screen.getAllByRole("button", {
        name: /Test/gi
      });

      expect(options).toHaveLength(testOptions.length);

      await Promise.all(
        options.map(async (item, index) => {
          expect(item).toHaveTextContent(testOptions[index].label);
          expect(item).toBeDisabled();
          await user.click(item);

          expect(refineFn).toHaveBeenCalledTimes(1);
        })
      );
    });

    it("Device: Should call refine when clicking a option", async () => {
      const refineFn = vi.fn();

      vi.mocked(useSortBy).mockReturnValue({
        ...useSortByMock,
        options: testOptions,
        canRefine: true,
        refine: refineFn
      });

      render(<Sort />);

      const button = screen.getByRole("button");
      const user = userEvent.setup();
      await user.click(button);

      const options = screen.getAllByRole("button", {
        name: /Test/gi
      });

      expect(options).toHaveLength(testOptions.length);

      await Promise.all(
        options.map(async (item, index) => {
          const testOption = testOptions[index];
          expect(item).toHaveTextContent(testOption.label);
          expect(item).not.toBeDisabled();
          await user.click(item);

          expect(refineFn).toBeCalledWith(testOption.value);
        })
      );
    });
  });

  describe("Desktop", () => {
    it("Desktop: Should render options", async () => {
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

    it("Desktop: Should disable select if can't refine", () => {
      vi.mocked(useSortBy).mockReturnValue({
        ...useSortByMock
      });
      render(<Sort />);
      const select = screen.getByRole("combobox");
      expect(select).toBeDisabled();
    });

    it("Desktop: Should call refine when selecting a option", async () => {
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
});
