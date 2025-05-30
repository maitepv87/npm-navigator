import axios, { AxiosError } from "axios";
import { ThunkAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { setLoading, setError, setPackages } from "../slices/searchSlice";

interface SearchResponse {
  objects: {
    package: {
      name: string;
      version: string;
      description: string;
      keywords?: string[];
    };
  }[];
}

export const getPackages = (
  term: string
): ThunkAction<void, RootState, unknown, any> => {
  return async (dispatch) => {
    dispatch(setLoading());

    try {
      const response = await axios.get(
        `https://registry.npmjs.org/-/v1/search?text=${term}`
      );

      const data: SearchResponse = response.data;

      const packages = data.objects.map((searchResult) => {
        return {
          name: searchResult.package.name,
          version: searchResult.package.version,
          description: searchResult.package.description,
          keywords: searchResult.package.keywords ?? [],
        };
      });

      dispatch(setPackages(packages));
    } catch (error) {
      let errorMessage = "Unexpected error occurred";
      if (error instanceof AxiosError) {
        errorMessage = error.response?.data?.message || errorMessage;
      }
      dispatch(setError(errorMessage));
    }
  };
};
