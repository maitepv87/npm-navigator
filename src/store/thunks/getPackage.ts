import axios, { AxiosError } from "axios";
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
      const response = await axios.get(`https://registry.npmjs.org/${name}`);

      const {
        name: packageName,
        description,
        readme,
        license,
        maintainers,
        author,
      } = response.data;

      const formattedData: PackageDetails = {
        name: packageName,
        description,
        readme,
        license,
        maintainers,
        author:
          author ??
          (maintainers.length > 0
            ? maintainers[0]
            : { name: "Unknown", email: "N/A" }),
      };

      dispatch(setPackage(formattedData));
    } catch (error) {
      let errorMessage = "Unexpected error occurred";
      if (error instanceof AxiosError) {
        errorMessage = error.response?.data?.message || errorMessage;
      }
      dispatch(setError(errorMessage));
    }
  };
};
