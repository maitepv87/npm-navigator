import {
  Container,
  Typography,
  Grid,
  Skeleton,
  Card,
  CardContent,
  Box,
} from "@mui/material";

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
        {Array.from({ length: 6 }).map((_, index) => (
          <Card
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              textAlign: "center",
              padding: 3,
              mb: 3,
              boxShadow: 3,
              borderRadius: 2,
              minHeight: 200,
            }}
          >
            <CardContent sx={{ flex: 1, paddingBottom: 3 }}>
              <Skeleton width="60%" height={30} />

              <Skeleton width="80%" height={20} sx={{ mt: 1 }} />
              <Skeleton width="70%" height={20} />

              <Box
                sx={{
                  height: 1,
                  backgroundColor: "divider",
                  my: 2,
                  width: "80%",
                }}
              />

              <Skeleton width="40%" height={20} />
            </CardContent>

            <Skeleton
              variant="rectangular"
              width={100}
              height={40}
              sx={{ borderRadius: 2 }}
            />
          </Card>
        ))}
      </Grid>
    </Container>
  );
};
