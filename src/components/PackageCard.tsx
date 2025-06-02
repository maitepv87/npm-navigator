import { Link } from "react-router-dom";
import { Card, CardContent, Typography } from "@mui/material";
import { ActionButton } from "./";

interface PackageCardProps {
  name: string;
  description: string;
  maintainersCount: number;
}

export const PackageCard = ({
  name,
  description,
  maintainersCount,
}: PackageCardProps) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        textAlign: "center",
        padding: 3,
        mb: 3,
        boxShadow: 3,
        borderRadius: 2,
        minHeight: 200,
      }}
    >
      <CardContent sx={{ flex: 1, paddingBottom: 3 }}>
        <Typography
          variant="h5"
          component={Link}
          to={`/packages/${name}`}
          sx={{
            textDecoration: "none",
            fontWeight: "bold",
            color: "primary.main",
          }}
        >
          {name}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {description}
        </Typography>

        <Typography
          variant="body2"
          sx={{ fontWeight: "bold", color: "text.primary", letterSpacing: 0.5 }}
        >
          {maintainersCount} Maintainers
        </Typography>
      </CardContent>

      <ActionButton to={`/packages/${name}`} color="primary">
        View
      </ActionButton>
    </Card>
  );
};
