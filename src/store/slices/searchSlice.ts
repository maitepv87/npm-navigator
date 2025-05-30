import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { PackageSummary } from "../../types";

export interface SearchState {
  packages: PackageSummary[];
  isLoading: boolean;
  error: string | null;
}

const initialState: SearchState = {
  packages: [],
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
      console.log("action.payload", action.payload);
      state.isLoading = false;
      state.error = null;
      state.packages = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoading, setError, resetState, setPackages } =
  searchSlice.actions;

export default searchSlice.reducer;
