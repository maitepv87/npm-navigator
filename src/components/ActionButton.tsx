import { Button } from "@mui/material";
import { Link } from "react-router-dom";

interface ActionButtonProps {
  to: string;
  children: React.ReactNode;
  color?: "primary" | "secondary" | "success" | "error";
}

export const ActionButton = ({
  to,
  children,
  color = "primary",
}: ActionButtonProps) => {
  return (
    <Button
      variant="contained"
      color={color}
      component={Link}
      to={to}
      sx={{
        width: { xs: "100%", sm: "auto" },
        mt: { xs: 1, sm: 0 },
      }}
    >
      {children}
    </Button>
  );
};
