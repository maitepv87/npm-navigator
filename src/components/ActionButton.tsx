import { Button } from "@mui/material";
import { Link } from "react-router-dom";

interface ActionButtonProps {
  to: string;
  children: React.ReactNode;
  color?: "primary" | "secondary" | "success" | "error";
  type?: "button" | "submit" | "reset";
}

export const ActionButton = ({
  to,
  children,
  color = "primary",
  type = "button",
}: ActionButtonProps) => {
  return (
    <Button
      variant="contained"
      color={color}
      type={type}
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
