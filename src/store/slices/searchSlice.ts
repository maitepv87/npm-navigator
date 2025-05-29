import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { PackageSummary } from "../../types";

export interface SearchState {
  packages: PackageSummary[];
  isLoading: boolean;
  error: unknown;
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
    // increment: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const {} = searchSlice.actions;

export default searchSlice.reducer;
