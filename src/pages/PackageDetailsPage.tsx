import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getPackage } from "../store/thunks/getPackage";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
  Divider,
} from "@mui/material";

export const PackageDetailsPage = () => {
  const { name } = useParams();
  const dispatch = useAppDispatch();
  const packageData = useAppSelector((state) => state.search.package);

  useEffect(() => {
    if (name) {
      dispatch(getPackage(name));
    }
  }, [name]);

  return (
    <Container sx={{ maxWidth: "md", mt: 5 }}>
      <Card elevation={3}>
        <CardContent>
          <Typography variant="h4" fontWeight="bold">
            {packageData.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {packageData.description}
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Box>
            <Typography variant="body2" fontWeight="bold">
              License:
            </Typography>
            <Chip label={packageData.license} color="primary" />
          </Box>

          <Box sx={{ mt: 2 }}>
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

          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" fontWeight="bold">
              Maintainers:
            </Typography>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              {packageData.maintainers.map((maintainer) => (
                <Chip
                  key={maintainer.email}
                  label={`${maintainer.name} (${maintainer.email})`}
                />
              ))}
            </Box>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Box
            sx={{
              whiteSpace: "pre-wrap",
              bgcolor: "#f4f4f4",
              p: 2,
              borderRadius: 1,
            }}
          >
            <Typography variant="body2" fontWeight="bold">
              README:
            </Typography>
            <Typography variant="body2">{packageData.readme}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};
