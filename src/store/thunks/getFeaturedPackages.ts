import { AxiosError } from "axios";
import { apiClient } from "../../api/apiClient";
import { ThunkAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import {
  setLoading,
  setError,
  setFeaturePackages,
} from "../slices/searchSlice";
import type { FeaturePackage } from "../../types";

const FEATURES_PACKAGES = [
  "react",
  "typescript",
  "vite",
  "redux-toolkit",
  "axios",
  "esbuild",
];

export const getFeaturePackages = (): ThunkAction<
  void,
  RootState,
  unknown,
  any
> => {
  return async (dispatch) => {
    dispatch(setLoading());

    try {
      const requests = FEATURES_PACKAGES.map((name) =>
        apiClient.get(`/${name}`)
      );

      const responses = await Promise.all(requests);

      const packages: FeaturePackage[] = responses.map((res) => ({
        name: res.data.name,
        description: res.data.description,
        maintainersCount: res.data.maintainers.length,
      }));

      dispatch(setFeaturePackages(packages));
    } catch (error) {
      let errorMessage = "Unexpected error occurred";
      if (error instanceof AxiosError) {
        errorMessage = error.response?.data?.message || errorMessage;
      }
      dispatch(setError(errorMessage));
    }
  };
};
