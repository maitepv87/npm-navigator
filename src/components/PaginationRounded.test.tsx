import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { PaginationRounded } from "./PaginationRounded";

describe("PaginationRounded", () => {
  it("renders with correct page and count", () => {
    render(<PaginationRounded count={5} page={2} onChange={() => {}} />);
    expect(screen.getByRole("button", { name: "2" })).toHaveAttribute(
      "aria-current",
      "true"
    );
  });

  it("calls onChange when user clicks another page", async () => {
    const handleChange = vi.fn();
    render(<PaginationRounded count={5} page={1} onChange={handleChange} />);

    const pageButton = screen.getByRole("button", { name: "3" });
    await userEvent.click(pageButton);

    expect(handleChange).toHaveBeenCalledWith(3);
  });
});
