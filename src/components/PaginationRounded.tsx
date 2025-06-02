import { Pagination, Stack } from "@mui/material";
interface PaginationRoundedProps {
  count: number;
  page: number;
  onChange: (page: number) => void;
}

export const PaginationRounded = ({
  count,
  page,
  onChange,
}: PaginationRoundedProps) => {
  return (
    <Stack spacing={2}>
      <Pagination
        count={count}
        page={page}
        onChange={(_, newPage) => onChange(newPage)}
        variant="outlined"
        shape="rounded"
      />
    </Stack>
  );
};
