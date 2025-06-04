import type { PackageSummary } from "../types";
import { Link } from "react-router-dom";
import { Card, CardContent, Typography, Chip, Box } from "@mui/material";
import { ActionButton } from "./";

interface PackageListItemProps {
  pack: PackageSummary;
}

export const PackageListItem = ({ pack }: PackageListItemProps) => {
  const packageUrl = `/packages/${encodeURIComponent(pack.name)}`;

  return (
    <Card
      elevation={1}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-between",
        alignItems: "start",
        p: 2,
        gap: 2,
        bgcolor: "#fdfdfd",
        borderRadius: 2,
      }}
    >
      <CardContent sx={{ flex: 1, minWidth: 0, p: 0 }}>
        <Typography
          variant="h6"
          component={Link}
          to={packageUrl}
          sx={{
            textDecoration: "none",
            fontWeight: "bold",
            color: "primary.main",
            wordBreak: "break-word",
            ":hover": { textDecoration: "underline" },
          }}
        >
          {pack.name}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
          {pack.description || "No description available"}
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
          {(pack.keywords || []).map((keyword, index) => (
            <Chip
              key={`${keyword}-${index}`}
              label={keyword}
              size="small"
              color="default"
              variant="outlined"
            />
          ))}
        </Box>
      </CardContent>

      <Box sx={{ alignSelf: "center", mt: { xs: 2, sm: 0 } }}>
        <ActionButton to={packageUrl} color="primary">
          View
        </ActionButton>
      </Box>
    </Card>
  );
};
