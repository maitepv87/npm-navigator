import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import { ActionButton } from "./ActionButton";

describe("ActionButton", () => {
  it("must show text and have correct link and type", () => {
    render(
      <BrowserRouter>
        <ActionButton to="/test" type="button" color="secondary">
          Click me
        </ActionButton>
      </BrowserRouter>
    );

    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("type", "button");
    expect(button.closest("a")).toHaveAttribute("href", "/test");
  });

  it("navigates to dynamic route using 'to' prop", () => {
    render(
      <BrowserRouter>
        <ActionButton to="/packages/example-package" color="primary">
          View
        </ActionButton>
      </BrowserRouter>
    );

    const button = screen.getByRole("button", { name: /view/i });
    expect(button).toBeInTheDocument();
    expect(button.closest("a")).toHaveAttribute(
      "href",
      "/packages/example-package"
    );
  });
});
