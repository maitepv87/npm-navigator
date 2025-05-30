import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { PackageSummary, PackageDetails } from "../../types";

export interface SearchState {
  packages: PackageSummary[];
  package: PackageDetails;
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
  isLoading: false,
  error: null,
};

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
      state.packages = [];
      state.isLoading = false;
      state.error = null;
    },
    setPackages: (state, action: PayloadAction<PackageSummary[]>) => {
      console.log("setPackages", action.payload);
      state.packages = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setPackage: (state, action: PayloadAction<PackageDetails>) => {
      console.log("setPackage", action.payload);
      state.package = action.payload;
      state.isLoading = false;
      state.error = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoading, setError, resetState, setPackages, setPackage } =
  searchSlice.actions;

export default searchSlice.reducer;
