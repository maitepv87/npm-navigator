import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchInput } from "./SearchInput";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

// Mock personalizado de hooks y router
vi.mock("../store/hooks", () => ({
  useAppDispatch: vi.fn(),
  useAppSelector: vi.fn(),
}));

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual<typeof import("react-router-dom")>("react-router-dom");
  return {
    ...actual,
    useNavigate: vi.fn(),
  };
});

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useNavigate } from "react-router-dom";

describe("SearchInput", () => {
  const dispatchMock = vi.fn();
  const navigateMock = vi.fn();

  beforeEach(() => {
    (useAppDispatch as any).mockReturnValue(dispatchMock);
    (useAppSelector as any).mockImplementation((selector: any) =>
      selector({ search: { searchTerm: "" } })
    );
    (useNavigate as any).mockReturnValue(navigateMock);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders input with value from redux", () => {
    (useAppSelector as any).mockImplementation((selector: any) =>
      selector({ search: { searchTerm: "react" } })
    );
    render(<SearchInput />);
    expect(screen.getByPlaceholderText(/search packages/i)).toHaveValue("react");
  });

  it("dispatches setSearchTerm on input change", async () => {
    render(<SearchInput />);
    const input = screen.getByPlaceholderText(/search packages/i);
    await userEvent.type(input, "redux");
    expect(dispatchMock).toHaveBeenCalled();
  });

  it("does not dispatch or navigate on empty search term submit", () => {
    (useAppSelector as any).mockImplementation((selector: any) =>
      selector({ search: { searchTerm: " " } })
    );
    render(<SearchInput />);
    const form = screen.getByRole("textbox").closest("form")!;
    fireEvent.submit(form);
    expect(dispatchMock).not.toHaveBeenCalled();
    expect(navigateMock).not.toHaveBeenCalled();
  });

  it("dispatches getPackages and navigates on valid submit", () => {
    (useAppSelector as any).mockImplementation((selector: any) =>
      selector({ search: { searchTerm: "react" } })
    );
    render(<SearchInput />);
    const form = screen.getByRole("textbox").closest("form")!;
    fireEvent.submit(form);
    expect(dispatchMock).toHaveBeenCalled();
    expect(navigateMock).toHaveBeenCalledWith("/search?term=react");
  });
});
