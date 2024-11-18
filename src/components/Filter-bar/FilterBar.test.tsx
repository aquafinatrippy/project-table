import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, Mock } from "vitest";
import { FilterBar } from "./index";
import { useFilters } from "../../hooks/useFilters";

vi.mock("../../hooks/useFilters");

describe("FilterBar", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders correctly", () => {
    (useFilters as Mock).mockReturnValue({
      filters: { code: "" },
      setFilters: vi.fn(),
    });

    render(<FilterBar />);
    expect(screen.getByTestId("filter-bar-title")).toBeInTheDocument();
    expect(screen.getByTestId("input")).toBeInTheDocument();
    expect(screen.getByTestId("input-label")).toBeInTheDocument();
  });

  it("updates filter state on input change", () => {
    const setFiltersMock = vi.fn();
    (useFilters as Mock).mockReturnValue({
      filters: { code: "" },
      setFilters: setFiltersMock,
    });

    render(<FilterBar />);
    const inputElement = screen.getByTestId("input");
    fireEvent.change(inputElement, { target: { value: "US" } });

    expect(setFiltersMock).toHaveBeenCalledWith({ code: "US" });
  });
});
