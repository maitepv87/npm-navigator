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
        textAlign: "center",
        p: 3,
        borderRadius: 3,
        boxShadow: 4,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 6,
        },
        minHeight: 240,
        backgroundColor: "background.paper",
      }}
    >
      <CardContent sx={{ flex: 1, pb: 3 }}>
        <Typography
          variant="h5"
          component={Link}
          to={`/packages/${name}`}
          sx={{
            textDecoration: "none",
            fontWeight: "bold",
            color: "primary.main",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          {name}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mt: 1,
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
          sx={{
            mt: 1,
            fontWeight: 500,
            color: "text.primary",
            fontSize: "0.875rem",
          }}
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
