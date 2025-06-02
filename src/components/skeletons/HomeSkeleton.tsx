import { Container, Typography, Grid, Skeleton } from "@mui/material";

export const HomeSkeleton = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h2" fontWeight="bold" align="center">
        <Skeleton width="50%" height={40} />
      </Typography>

      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        sx={{ maxWidth: 600, mx: "auto", mt: 2, mb: 6 }}
      >
        <Skeleton width="80%" height={20} />
      </Typography>

      <Grid container spacing={4} sx={{ justifyContent: "center" }}>
        {Array.from({ length: 4 }).map((_, index) => (
          <Grid key={index} sx={{ flex: "1 1 auto", minWidth: 280 }}>
            <Skeleton variant="rectangular" width="100%" height={150} />
            <Skeleton width="60%" height={30} />
            <Skeleton width="40%" height={20} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
