import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { SearchInput } from "./";

export const Header = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ backgroundColor: "#f3f3f3", color: "#333" }}
    >
      <Toolbar
        sx={{ display: "flex", justifyContent: "space-between", paddingX: 2 }}
      >
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ textDecoration: "none", color: "#333", fontWeight: "bold" }}
        >
          NPM Registry
        </Typography>
        <SearchInput />
      </Toolbar>
    </AppBar>
  );
};
