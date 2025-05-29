import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "../components";

export const Root = () => {
  return (
    <Container maxWidth="lg" sx={{ paddingX: 5 }}>
      <Header />
      <Outlet /> {/* The secondary route is rendered here */}
    </Container>
  );
};
