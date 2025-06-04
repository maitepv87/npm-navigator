import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type {
  PackageSummary,
  PackageDetails,
  FeaturePackage,
} from "../../types";
import { PAGE_SIZE } from "../../config";

export interface SearchState {
  packages: PackageSummary[];
  package: PackageDetails;
  featurePackages: FeaturePackage[];
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
  featurePackages: [],
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
    resetSearchState: (state) => {
      state.packages = [];
      state.package = initialState.package;
      state.total = 0;
      state.searchTerm = "";
      state.error = null;
    },
    setPackages: (state, action: PayloadAction<PackagesPayload>) => {
      state.packages = action.payload.packages.slice(0, PAGE_SIZE); // Limit the number of saved packages
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
    setFeaturePackages: (state, action: PayloadAction<FeaturePackage[]>) => {
      state.featurePackages = action.payload;
      state.isLoading = false;
      state.error = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setLoading,
  setError,
  resetSearchState,
  setPackages,
  setPackage,
  setSearchTerm,
  setFeaturePackages,
} = searchSlice.actions;

export default searchSlice.reducer;
