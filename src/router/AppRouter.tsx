import { Route, Routes } from "react-router-dom";
import { Root, HomePage, SearchPage, DetailsPage } from "../pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/packages/:name" element={<DetailsPage />} />
      </Route>
    </Routes>
  );
};
