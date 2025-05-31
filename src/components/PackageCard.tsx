import { Link } from "react-router-dom";
import { Card, CardContent, Typography, Button } from "@mui/material";

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

      <Button
        variant="contained"
        color="primary"
        component={Link}
        to={`/packages/${name}`}
        sx={{ mt: 2 }}
      >
        View
      </Button>
    </Card>
  );
};
