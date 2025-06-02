import { useNavigate } from "react-router-dom";
import { TextField, IconButton, Box } from "@mui/material";
import { VscSearch } from "react-icons/vsc";
import { INITIAL_PAGE, PAGE_SIZE } from "../config";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getPackages } from "../store/thunks/getPackages";
import { setSearchTerm } from "../store/slices/searchSlice";

export const SearchInput = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state) => state.search.searchTerm);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(event.target.value));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(getPackages(searchTerm, INITIAL_PAGE, PAGE_SIZE));
    navigate(`/search?term=${searchTerm}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          borderRadius: 1,
          overflow: "hidden",
          backgroundColor: "#fff",
          width: { xs: "100%", sm: "auto" },
          mt: { xs: 2, sm: 0 },
        }}
      >
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search packages..."
          value={searchTerm}
          onChange={handleChange}
          sx={{ borderRadius: 0 }}
        />
        <IconButton type="submit" sx={{ color: "#333", borderRadius: 0 }}>
          <VscSearch />
        </IconButton>
      </Box>
    </form>
  );
};
