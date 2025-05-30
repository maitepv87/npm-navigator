import { Route, Routes } from "react-router-dom";
import {
  Root,
  HomePage,
  PackageSearchPage,
  PackageDetailsPage,
} from "../pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<HomePage />} />
        <Route path="/search" element={<PackageSearchPage />} />
        <Route path="/packages/:name" element={<PackageDetailsPage />} />
      </Route>
    </Routes>
  );
};
