import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeEach } from "vitest";
import { PackageCard } from "./PackageCard";

describe("PackageCard", () => {
  const mockProps = {
    name: "react",
    description: "A JavaScript library for building user interfaces",
    maintainersCount: 5,
  };

  beforeEach(() => {
    render(
      <BrowserRouter>
        <PackageCard {...mockProps} />
      </BrowserRouter>
    );
  });

  it("renders the package name as a link", () => {
    const nameLink = screen.getByRole("link", { name: /react/i });
    expect(nameLink).toBeInTheDocument();
    expect(nameLink).toHaveAttribute("href", "/packages/react");
  });

  it("renders the description", () => {
    expect(
      screen.getByText(/a javascript library for building user interfaces/i)
    ).toBeInTheDocument();
  });

  it("shows the maintainers count", () => {
    expect(screen.getByText(/5 maintainers/i)).toBeInTheDocument();
  });

  it("renders the View button with correct link", () => {
    const viewBtn = screen.getByRole("link", { name: /view/i });
    expect(viewBtn.closest("a")).toHaveAttribute("href", "/packages/react");
  });
});
