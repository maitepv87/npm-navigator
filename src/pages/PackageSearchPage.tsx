import { useState } from "react";
import { Typography, Box, Paper, Divider } from "@mui/material";
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
    if (!searchTerm) return;

    setPage(newPage - 1);
    dispatch(getPackages(searchTerm, newPage - 1, PAGE_SIZE));
  };

  const totalPages = Math.ceil(total / PAGE_SIZE);

  if (isLoading) return <CardListSkeleton />;

  return (
    <Paper
      elevation={2}
      sx={{
        p: { xs: 2, sm: 4 },
        mt: 4,
        maxWidth: "xl",
        mx: "auto",
      }}
    >
      <ErrorHandler error={error} />

      <Typography variant="h5" fontWeight="bold" gutterBottom>
        {total} packages found
      </Typography>
      <Divider sx={{ my: 2 }} />

      {total === 0 && !isLoading && !error && (
        <Typography variant="body1" sx={{ mt: 2 }}>
          No packages found for "<strong>{searchTerm}</strong>"
        </Typography>
      )}

      {packages.length > 0 && (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {packages.map((result) => (
            <PackageListItem key={result.name} pack={result} />
          ))}
        </Box>
      )}

      {totalPages > 1 && (
        <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
          <PaginationRounded
            count={totalPages}
            page={page + 1}
            onChange={handlePageChange}
          />
        </Box>
      )}
    </Paper>
  );
};
