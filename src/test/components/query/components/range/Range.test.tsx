import * as React from "react";
import { render, screen } from "@testing-library/react";
import Range from "@/components/query/components/range/Range";
import { useRange } from "react-instantsearch-core";
import { beforeAll } from "vitest";
import { userEvent } from "@testing-library/user-event";

const useRangeMock: ReturnType<typeof useRange> = {
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
describe("Range tests", () => {
  beforeAll(() => {
    vi.mock("react-instantsearch-core", async () => {
      const originalModule = await vi.importActual("react-instantsearch-core");
      return {
        ...originalModule,
        useRange: vi.fn()
      };
    });
  });

  it("Should not render if min or max is null", () => {
    vi.mocked(useRange).mockReturnValue({
      ...useRangeMock
    });
    const { container } = render(<Range attribute={"test"} title={"Test"} />);
    expect(container).toBeEmpty();
  });
  it("Should show heading according to current values", () => {
    vi.mocked(useRange).mockReturnValue({
      ...useRangeMock,
      range: {
        min: 1,
        max: 100
      }
    });

    render(<Range attribute={"test"} title={"Test"} />);
    const title = screen.getByRole("heading");
    const minText = screen.getByText(/Min: 1/i);
    const maxText = screen.getByText(/Max: 100/i);

    expect(title).toHaveTextContent(/test/i);
    expect(minText).toBeInTheDocument();
    expect(maxText).toBeInTheDocument();
  });
  it("Should not be able to interact if can't refine", () => {
    vi.mocked(useRange).mockReturnValue({
      ...useRangeMock,
      range: {
        min: 1,
        max: 100
      }
    });
    render(<Range attribute={"test"} title={"Test"} />);
    const slider = screen.getByTestId("slider");
    const minInput = screen.getByPlaceholderText(/min/i);
    const maxInput = screen.getByPlaceholderText(/max/i);

    expect(slider).toHaveAttribute("aria-disabled", "true");
    expect(minInput).toHaveAttribute("disabled");
    expect(maxInput).toHaveAttribute("disabled");
  });
  it("Should be able to interact if can refine", () => {
    vi.mocked(useRange).mockReturnValue({
      ...useRangeMock,
      canRefine: true,
      range: {
        min: 1,
        max: 100
      }
    });
    render(<Range attribute={"test"} title={"Test"} />);
    const slider = screen.getByTestId("slider");
    const minInput = screen.getByPlaceholderText(/min/i);
    const maxInput = screen.getByPlaceholderText(/max/i);

    expect(slider).not.toHaveAttribute("aria-disabled", "true");
    expect(minInput).not.toHaveAttribute("disabled");
    expect(maxInput).not.toHaveAttribute("disabled");
  });
  it("Should not be able to input value if is not between the range", async () => {
    const refineMock = vi.fn();
    vi.mocked(useRange).mockReturnValue({
      ...useRangeMock,
      canRefine: true,
      range: {
        min: 1,
        max: 100
      },
      refine: refineMock
    });

    render(<Range attribute={"test"} title={"Test"} />);

    const minInput = screen.getByPlaceholderText(/min/i);
    const maxInput = screen.getByPlaceholderText(/max/i);

    const minText = screen.getByText(/Min: /i);
    const maxText = screen.getByText(/Max: /i);

    const user = userEvent.setup();

    await user.type(minInput, "255");
    await user.type(maxInput, "255");

    expect(refineMock).toHaveBeenLastCalledWith([12, 100]);
    expect(minText).toHaveTextContent(/1/i);
    expect(maxText).toHaveTextContent(/100/i);

    await user.type(minInput, "{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}3");
    await user.type(maxInput, "{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}99");

    expect(refineMock).toHaveBeenLastCalledWith([3, 99]);
    expect(minText).toHaveTextContent(/3/i);
    expect(maxText).toHaveTextContent(/99/i);
  });
});
