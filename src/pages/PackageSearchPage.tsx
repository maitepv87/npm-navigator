import { Typography, Box } from "@mui/material";
import { CardListSkeleton, PackageListItem } from "../components";
import { useAppSelector } from "../store/hooks";

export const PackageSearchPage = () => {
  const { packages, isLoading } = useAppSelector((state) => state.search);

  if (isLoading) return <CardListSkeleton />;

  return (
    <Box sx={{ padding: 3 }}>
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
