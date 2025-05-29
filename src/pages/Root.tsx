import { Outlet } from "react-router-dom";
import { Header } from "../components";

export const Root = () => {
  return (
    <div>
      <Header />
      <Outlet /> {/* The secondary route is rendered here */}
    </div>
  );
};
