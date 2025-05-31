import { Link } from "react-router-dom";
import { Card, CardContent, Typography } from "@mui/material";
import { ActionButton } from "./";

interface PackageCardProps {
  name: string;
  description: string;
  maintainers: {
    email: string;
    name: string;
  }[];
}

export const PackageCard = ({
  name,
  description,
  maintainers,
}: PackageCardProps) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: 2,
        mb: 2,
      }}
    >
      <CardContent sx={{ flex: 1 }}>
        <Typography
          variant="h6"
          component={Link}
          to={`/packages/${name}`}
          sx={{ textDecoration: "none", fontWeight: "bold", color: "inherit" }}
        >
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {maintainers.length} Maintainers
        </Typography>
      </CardContent>

      <ActionButton to={`/packages/${name}`} color="primary">
        View
      </ActionButton>
    </Card>
  );
};
