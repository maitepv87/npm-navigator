import { Container, Typography, Grid } from "@mui/material";
import { PackageCard } from "../components";

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
        sx={{ maxWidth: 600, mx: "auto", mt: 2, mb: 6 }}
      >
        The package manager for JavaScript. Search and view packages.
      </Typography>

      <Grid container spacing={4} sx={{ justifyContent: "center" }}>
        {featuredPackages.map(({ name, description, maintainers }) => (
          <Grid key={name} sx={{ flex: "1 1 auto", minWidth: 280 }}>
            <PackageCard
              name={name}
              description={description}
              maintainers={maintainers}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
