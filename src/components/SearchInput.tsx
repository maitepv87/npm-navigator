// import { useState } from "react";
// import { VscSearch } from "react-icons/vsc";
// import { useNavigate } from "react-router-dom";

// export const SearchInput = () => {
//   const [term, setTerm] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     navigate(`/search?term=${term}`);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <div>
//           <VscSearch />
//         </div>
//         <input value={term} onChange={(event) => setTerm(event.target.value)} />
//       </div>
//     </form>
//   );
// };

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, IconButton, Box } from "@mui/material";
import { VscSearch } from "react-icons/vsc";

export const SearchInput = () => {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
