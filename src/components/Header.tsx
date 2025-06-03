import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { SearchInput } from "./";

const toolbarStyles = {
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  alignItems: "center",
  paddingX: 2,
};

const searchContainerStyles = {
  width: "100%",
  display: "flex",
  justifyContent: { xs: "center", sm: "flex-end" },
  mt: { xs: 1, sm: 0 },
  px: 2,
};

export const Header = () => {
  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{ backgroundColor: "#f3f3f3", color: "#333" }}
      >
        <Toolbar sx={toolbarStyles}>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{ textDecoration: "none", color: "#333", fontWeight: "bold" }}
          >
            NPM Registry
          </Typography>

          {/* Aquí el SearchInput se muestra solo en pantallas sm y mayores */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <SearchInput />
          </Box>
        </Toolbar>
      </AppBar>

      {/* En pantallas xs, mostramos el SearchInput debajo del AppBar */}
      <Box sx={searchContainerStyles}>
        <Box sx={{ display: { xs: "block", sm: "none" }, width: "100%" }}>
          <SearchInput />
        </Box>
      </Box>
    </>
  );
};
