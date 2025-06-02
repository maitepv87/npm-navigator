import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { PackageSummary, PackageDetails } from "../../types";

export interface SearchState {
  packages: PackageSummary[];
  package: PackageDetails;
  total: number;
  searchTerm: string;
  isLoading: boolean;
  error: string | null;
}

const initialState: SearchState = {
  packages: [],
  package: {
    name: "",
    description: "",
    readme: "",
    author: { email: "", name: "" },
    maintainers: [],
    license: "",
  },
  total: 0,
  searchTerm: "",
  isLoading: false,
  error: null,
};

interface PackagesPayload {
  packages: PackageSummary[];
  total: number;
}

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    resetState: (state) => {
      Object.assign(state, initialState);
    },
    setPackages: (state, action: PayloadAction<PackagesPayload>) => {
      console.log("setPackages", action.payload);
      state.packages = action.payload.packages;
      state.total = action.payload.total;
      state.isLoading = false;
      state.error = null;
    },
    setPackage: (state, action: PayloadAction<PackageDetails>) => {
      state.package = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setLoading,
  setError,
  resetState,
  setPackages,
  setPackage,
  setSearchTerm,
} = searchSlice.actions;

export default searchSlice.reducer;
