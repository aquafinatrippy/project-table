import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Switch } from "./index";

describe("Switch Component", () => {
  const handleToggle = vi.fn();

  it("renders the switch component", () => {
    render(
      <Switch
        isOn={false}
        handleToggle={handleToggle}
        onIcon="brightness_3"
        offIcon="wb_sunny"
      />
    );
    expect(screen.getByTestId("switch")).toBeInTheDocument();
  });

  it("displays the correct icon when switch is off", () => {
    render(
      <Switch
        isOn={false}
        handleToggle={handleToggle}
        onIcon="brightness_3"
        offIcon="wb_sunny"
      />
    );
    expect(screen.getByText("wb_sunny")).toBeInTheDocument();
  });

  it("displays the correct icon when switch is on", () => {
    render(
      <Switch
        isOn={true}
        handleToggle={handleToggle}
        onIcon="brightness_3"
        offIcon="wb_sunny"
      />
    );
    expect(screen.getByText("brightness_3")).toBeInTheDocument();
  });

  it("calls handleToggle when clicked", () => {
    render(
      <Switch
        isOn={false}
        handleToggle={handleToggle}
        onIcon="brightness_3"
        offIcon="wb_sunny"
      />
    );
    fireEvent.click(screen.getByTestId("switch"));
    expect(handleToggle).toHaveBeenCalledTimes(1);
  });
});
