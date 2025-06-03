import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
  Divider,
  Stack,
  Paper,
} from "@mui/material";
import { Person, Groups, Gavel, Terminal } from "@mui/icons-material";
import ReactMarkdown from "react-markdown";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getPackage } from "../store/thunks";
import { FormSkeleton, ErrorHandler } from "../components";

export const PackageDetailsPage = () => {
  const { name } = useParams<{ name: string }>();
  const dispatch = useAppDispatch();
  const {
    package: packageData,
    isLoading,
    error,
  } = useAppSelector((state) => state.search);

  useEffect(() => {
    if (name) {
      dispatch(getPackage(name));
    }
  }, [dispatch, name]);

  if (isLoading) return <FormSkeleton />;

  return (
    <Container sx={{ maxWidth: "md", mt: 5 }}>
      <ErrorHandler error={error} />

      <Card elevation={3}>
        <CardContent>
          <Box
            sx={{
              backgroundColor: "#f0f4ff",
              p: 2,
              borderRadius: 2,
              mb: 2,
            }}
          >
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              {packageData.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {packageData.description}
            </Typography>
          </Box>

          {/* instalación */}
          <Box
            sx={{
              bgcolor: "#f5f5f5",
              p: 1,
              px: 2,
              borderRadius: 1,
              fontFamily: "monospace",
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              mb: 3,
            }}
          >
            <Terminal fontSize="small" />
            npm install {packageData.name}
          </Box>

          {/* License, Author, Maintainers */}
          <Stack spacing={2}>
            <Box display="flex" alignItems="center" gap={1}>
              <Gavel fontSize="small" />
              <Typography variant="body2" fontWeight="bold">
                License:
              </Typography>
              <Chip label={packageData.license} color="primary" />
            </Box>

            <Box display="flex" alignItems="center" gap={1}>
              <Person fontSize="small" />
              <Typography variant="body2" fontWeight="bold">
                Author:
              </Typography>
              {packageData.author ? (
                <Typography variant="body2">
                  {packageData.author.name} ({packageData.author.email})
                </Typography>
              ) : (
                <Typography variant="body2" color="text.secondary">
                  No author information available
                </Typography>
              )}
            </Box>

            <Box display="flex" alignItems="center" gap={1}>
              <Groups fontSize="small" />
              <Typography variant="body2" fontWeight="bold">
                Maintainers:
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", pl: 4 }}>
              {packageData.maintainers.map((m) => (
                <Chip
                  key={m.email}
                  label={`${m.name} (${m.email})`}
                  variant="outlined"
                  color="secondary"
                />
              ))}
            </Box>
          </Stack>

          <Divider sx={{ my: 3 }} />

          {/* README */}
          <Box sx={{ mt: 4 }}>
            <Typography variant="body2" fontWeight="bold" gutterBottom>
              README:
            </Typography>

            <Paper
              elevation={1}
              sx={{
                p: 2,
                overflowX: "auto",
                fontSize: "0.9rem",
                lineHeight: 1.6,
                backgroundColor: "#fafafa",
                "& pre": {
                  backgroundColor: "#eee",
                  padding: "8px",
                  borderRadius: "4px",
                  overflowX: "auto",
                },
                "& code": {
                  fontFamily: "monospace",
                  backgroundColor: "#eee",
                  padding: "2px 4px",
                  borderRadius: "4px",
                },
              }}
            >
              <ReactMarkdown>{packageData.readme}</ReactMarkdown>
            </Paper>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};
