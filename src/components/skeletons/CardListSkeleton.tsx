import { Skeleton, Card, CardContent, Box } from "@mui/material";

export const CardListSkeleton = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
      {[...Array(5)].map((_, index) => (
        <Card
          key={index}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 1,
          }}
        >
          <CardContent sx={{ flex: 1 }}>
            <Skeleton variant="text" width="40%" height={30} />
            <Skeleton variant="text" width="80%" height={20} />
            <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
              {[...Array(3)].map((_, idx) => (
                <Skeleton
                  key={idx}
                  variant="rectangular"
                  width={60}
                  height={24}
                />
              ))}
            </Box>
          </CardContent>
          <Skeleton
            variant="rectangular"
            width={80}
            height={36}
            sx={{ mr: 2 }}
          />
        </Card>
      ))}
    </Box>
  );
};
