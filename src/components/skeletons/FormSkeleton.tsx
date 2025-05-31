import {
  Skeleton,
  Container,
  Card,
  CardContent,
  Box,
  Divider,
} from "@mui/material";

export const FormSkeleton = () => {
  return (
    <Container sx={{ maxWidth: "md", mt: 5 }}>
      <Card elevation={3}>
        <CardContent>
          <Skeleton variant="text" width="40%" height={40} />
          <Skeleton variant="text" width="80%" height={20} />

          <Divider sx={{ my: 2 }} />

          <Box>
            <Skeleton variant="rectangular" width={120} height={30} />
          </Box>

          <Box sx={{ mt: 2 }}>
            <Skeleton variant="text" width="40%" height={20} />
            <Skeleton variant="text" width="60%" height={20} />
          </Box>

          <Box sx={{ mt: 2, display: "flex", gap: 1, flexWrap: "wrap" }}>
            {[...Array(3)].map((_, idx) => (
              <Skeleton
                key={idx}
                variant="rectangular"
                width={80}
                height={30}
              />
            ))}
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
            <Skeleton variant="rectangular" width="100%" height={150} />
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};
