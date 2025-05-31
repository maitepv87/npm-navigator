import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

export const HomePage = () => {
  const featuredPackages = [
    {
      name: "react",
      description: "A JavaScript library for building user interfaces",
      maintainers: [{ name: "Meta", email: "support@meta.com" }],
    },
    {
      name: "axios",
      description: "Promise-based HTTP client for the browser and Node.js",
      maintainers: [{ name: "Team Axios", email: "axios@team.com" }],
    },
    {
      name: "redux-toolkit",
      description: "Official, opinionated Redux toolset",
      maintainers: [{ name: "Redux Team", email: "redux@team.com" }],
    },
    {
      name: "typescript-toolkit",
      description: "Official, opinionated typescript",
      maintainers: [{ name: "Redux Team", email: "redux@team.com" }],
    },
  ];

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h2" fontWeight="bold" align="center">
        The NPM Registry
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        sx={{ maxWidth: 600, mx: "auto", mt: 2 }}
      >
        The package manager for JavaScript. Search and view packages.
      </Typography>

      <Grid
        container
        columns={{ xs: 4, sm: 8, md: 12 }}
        spacing={4}
        sx={{
          mt: 4,
          maxWidth: 900,
          mx: "auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "stretch",
          rowGap: 4,
        }}
      >
        {featuredPackages.map((p) => (
          <Grid key={p.name} sx={{ flex: "1 1 auto", minWidth: 280 }}>
            <Card
              elevation={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                p: 2,
                height: "100%",
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" fontWeight="bold" align="center">
                  {p.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  align="center"
                >
                  {p.description}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  align="center"
                  sx={{ mt: 1 }}
                >
                  {p.maintainers.length} Maintainers
                </Typography>
              </CardContent>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
                href={`/packages/${p.name}`}
              >
                View
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
