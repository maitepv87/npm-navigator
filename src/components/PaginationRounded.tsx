import { Pagination, Stack } from "@mui/material";

interface PaginationRoundedProps {
  count: number;
}

export const PaginationRounded = ({ count }: PaginationRoundedProps) => {
  return (
    <Stack spacing={2}>
      <Pagination count={count} variant="outlined" shape="rounded" />
    </Stack>
  );
};
