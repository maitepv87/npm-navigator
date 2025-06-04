import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ErrorHandler } from "./ErrorHandler";

describe("ErrorHandler", () => {
  it("renders nothing when error is null", () => {
    const { container } = render(<ErrorHandler error={null} />);
    expect(container).toBeEmptyDOMElement(); // no muestra nada
  });

  it("shows error message when error is provided", () => {
    render(<ErrorHandler error="Something went wrong" />);
    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
    expect(screen.getByRole("alert")).toBeInTheDocument(); // Alert de MUI
  });
});
