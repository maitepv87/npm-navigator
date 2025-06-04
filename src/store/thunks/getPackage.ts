import { AxiosError } from "axios";
import { apiClient } from "../../api/apiClient";
import { ThunkAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { setLoading, setError, setPackage } from "../slices/searchSlice";
import type { PackageDetails } from "../../types";

export const getPackage = (
  name: string
): ThunkAction<void, RootState, unknown, any> => {
  return async (dispatch) => {
    dispatch(setLoading());

    try {
      const response = await apiClient.get(`/${name}`);

      const data = response.data;

      const filteredPackage: PackageDetails = {
        name: data.name,
        description: data.description,
        readme: data.readme || "",
        author: {
          name: data.author?.name || "",
          email: data.author?.email || "",
        },
        maintainers: data.maintainers || [],
        license: data.license || "",
      };

      dispatch(setPackage(filteredPackage));
    } catch (error) {
      let errorMessage = "Unexpected error occurred";
      if (error instanceof AxiosError) {
        errorMessage =
          error.response?.data?.message || error.message || errorMessage;
      }
      dispatch(setError(errorMessage));
    }
  };
};
