import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import { PackageListItem } from "./PackageListItem";
import type { PackageSummary } from "../types";

const mockPack: PackageSummary = {
  name: "test-package",
  version: "1.0.0",
  description: "This is a test package",
  keywords: ["react", "vite", "testing"],
};

describe("PackageListItem", () => {
  it("renders package name, description, keywords and action button", () => {
    render(
      <BrowserRouter>
        <PackageListItem pack={mockPack} />
      </BrowserRouter>
    );

    // Nombre del paquete y link
    const nameLink = screen.getByRole("link", { name: /test-package/i });
    expect(nameLink).toBeInTheDocument();
    expect(nameLink).toHaveAttribute("href", "/packages/test-package");

    // Descripción
    expect(screen.getByText(/this is a test package/i)).toBeInTheDocument();

    // Keywords (chips)
    mockPack.keywords?.forEach((keyword) => {
      expect(screen.getByText(keyword)).toBeInTheDocument();
    });
    
    // Botón View
    const viewButton = screen.getByRole("button", { name: /view/i });
    expect(viewButton).toBeInTheDocument();
  });

  it("shows fallback text if description is missing", () => {
    const packWithoutDescription = { ...mockPack, description: "" };
    render(
      <BrowserRouter>
        <PackageListItem pack={packWithoutDescription} />
      </BrowserRouter>
    );
    expect(screen.getByText(/no description available/i)).toBeInTheDocument();
  });
});
