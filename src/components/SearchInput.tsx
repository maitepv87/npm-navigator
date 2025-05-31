import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, IconButton, Box } from "@mui/material";
import { VscSearch } from "react-icons/vsc";
import { useAppDispatch } from "../store/hooks";
import { getPackages } from "../store/thunks/getPackages";

export const SearchInput = () => {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(getPackages(term));
    navigate(`/search?term=${term}`);
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
          value={term}
          onChange={(event) => setTerm(event.target.value)}
          sx={{ borderRadius: 0 }}
        />
        <IconButton type="submit" sx={{ color: "#333", borderRadius: 0 }}>
          <VscSearch />
        </IconButton>
      </Box>
    </form>
  );
};
