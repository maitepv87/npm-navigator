import { Typography, Box } from "@mui/material";
import { PackageListItem } from "../components";

const searchResults = [
  { name: "react", description: "test" },
  { name: "redux", description: "test 2" },
];
export const SearchPage = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Search Results
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
        {searchResults.map((result) => (
          <PackageListItem key={result.name} />
        ))}
      </Box>
    </Box>
  );
};
