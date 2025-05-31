import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { SearchInput } from "./";

export const Header = () => {
  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{ backgroundColor: "#f3f3f3", color: "#333" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            alignItems: "center",
            paddingX: 2,
          }}
        >
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{ textDecoration: "none", color: "#333", fontWeight: "bold" }}
          >
            NPM Registry
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <SearchInput />
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ display: { xs: "block", sm: "none" }, px: 2, mt: 1 }}>
        <SearchInput />
      </Box>
    </>
  );
};
