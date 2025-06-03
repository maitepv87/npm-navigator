import { useEffect } from "react";
import { Container, Typography, Grid } from "@mui/material";
import { PackageCard, ErrorHandler, HomeSkeleton } from "../components";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { resetSearchState } from "../store/slices/searchSlice";
import { getFeaturePackages } from "../store/thunks";

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const { featurePackages, isLoading, error } = useAppSelector(
    (state) => state.search
  );

  useEffect(() => {
    dispatch(resetSearchState());
    dispatch(getFeaturePackages());

    
  }, [dispatch]);

  if (isLoading) return <HomeSkeleton />;

  return (
    <Container sx={{ py: 8 }}>
      <ErrorHandler error={error} />

      <Typography
        variant="h2"
        fontWeight="bold"
        align="center"
        gutterBottom
        sx={{
          background: "linear-gradient(to right, #1976d2, #42a5f5)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
        }}
      >
        The NPM Registry
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        sx={{ maxWidth: 600, mx: "auto", mt: 2, mb: 6, fontSize: "1.125rem" }}
      >
        The package manager for JavaScript. Search and view packages with ease.
      </Typography>

      <Grid
        container
        spacing={4}
        sx={{
          justifyContent: "center",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 3,
        }}
      >
        {featurePackages.map(({ name, description, maintainersCount }) => (
          <PackageCard
            key={name}
            name={name}
            description={description}
            maintainersCount={maintainersCount}
          />
        ))}
      </Grid>
    </Container>
  );
};
