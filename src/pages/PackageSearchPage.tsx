import { Typography, Box } from "@mui/material";
import { CardListSkeleton, ErrorHandler, PackageListItem } from "../components";
import { useAppSelector } from "../store/hooks";

export const PackageSearchPage = () => {
  const { packages, isLoading, error } = useAppSelector(
    (state) => state.search
  );

  if (isLoading) return <CardListSkeleton />;

  return (
    <Box sx={{ padding: 3 }}>
      <ErrorHandler error={error} />

      <Typography variant="h6" fontWeight="bold" gutterBottom>
        {packages.length} packages found
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
        {packages.map((result) => (
          <PackageListItem key={result.name} pack={result} />
        ))}
      </Box>
    </Box>
  );
};
