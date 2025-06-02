import { useState } from "react";
import { Typography, Box } from "@mui/material";
import {
  CardListSkeleton,
  ErrorHandler,
  PackageListItem,
  PaginationRounded,
} from "../components";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { getPackages } from "../store/thunks";
import { PAGE_SIZE } from "../config";

export const PackageSearchPage = () => {
  const [page, setPage] = useState(0);
  const dispatch = useAppDispatch();
  const { packages, total, isLoading, error, searchTerm } = useAppSelector(
    (state) => state.search
  );

  const handlePageChange = (newPage: number) => {
    setPage(newPage - 1);
    dispatch(getPackages(searchTerm, newPage - 1, PAGE_SIZE));
  };

  if (isLoading) return <CardListSkeleton />;

  const totalPages = Math.ceil(total / PAGE_SIZE);

  return (
    <Box sx={{ padding: 3 }}>
      <ErrorHandler error={error} />

      <Typography variant="h6" fontWeight="bold" gutterBottom>
        {total} packages found
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
        {packages.map((result) => (
          <PackageListItem key={result.name} pack={result} />
        ))}
      </Box>
      <Box sx={{ mt: 2 }}>
        <PaginationRounded
          count={totalPages}
          page={page + 1}
          onChange={handlePageChange}
        />
      </Box>
    </Box>
  );
};
