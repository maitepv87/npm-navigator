import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchInput } from "./SearchInput";
import * as reactRedux from "react-redux";
import * as router from "react-router-dom";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

describe("SearchInput", () => {
  const useDispatchMock = vi.spyOn(reactRedux, "useDispatch");
  const useSelectorMock = vi.spyOn(reactRedux, "useSelector");
  const useNavigateMock = vi.spyOn(router, "useNavigate");

  beforeEach(() => {
    useDispatchMock.mockReturnValue(vi.fn());
    useSelectorMock.mockImplementation((selector) =>
      selector({ search: { searchTerm: "" } })
    );
    useNavigateMock.mockReturnValue(vi.fn());
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders input with value from redux", () => {
    useSelectorMock.mockImplementation((selector) =>
      selector({ search: { searchTerm: "react" } })
    );
    render(<SearchInput />);
    expect(screen.getByPlaceholderText(/search packages/i)).toHaveValue(
      "react"
    );
  });

  it("dispatches setSearchTerm on input change", () => {
    const dispatch = vi.fn();
    useDispatchMock.mockReturnValue(dispatch);
    useSelectorMock.mockImplementation((selector) =>
      selector({ search: { searchTerm: "" } })
    );
    render(<SearchInput />);
    const input = screen.getByPlaceholderText(/search packages/i);

    userEvent.type(input, "redux");

    expect(dispatch).toHaveBeenCalledWith({
      type: "search/setSearchTerm",
      payload: "r",
    });
    // Nota: puedes mejorar esto simulando cada letra o sólo checar que se llame varias veces.
  });

  it("does not dispatch or navigate on empty search term submit", () => {
    const dispatch = vi.fn();
    const navigate = vi.fn();
    useDispatchMock.mockReturnValue(dispatch);
    useNavigateMock.mockReturnValue(navigate);
    useSelectorMock.mockImplementation((selector) =>
      selector({ search: { searchTerm: " " } })
    );

    render(<SearchInput />);
    const form = screen.getByRole("form");

    fireEvent.submit(form);

    expect(dispatch).not.toHaveBeenCalled();
    expect(navigate).not.toHaveBeenCalled();
  });

  it("dispatches getPackages and navigates on valid submit", () => {
    const dispatch = vi.fn();
    const navigate = vi.fn();
    useDispatchMock.mockReturnValue(dispatch);
    useNavigateMock.mockReturnValue(navigate);

    // Mock selector con término válido
    useSelectorMock.mockImplementation((selector) =>
      selector({ search: { searchTerm: "react" } })
    );

    render(<SearchInput />);
    const form = screen.getByRole("form");

    fireEvent.submit(form);

    expect(dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        // Aquí el thunk getPackages con los parámetros
        type: expect.stringContaining("getPackages/pending"),
      })
    );
    expect(navigate).toHaveBeenCalledWith("/search?term=react");
  });
});
