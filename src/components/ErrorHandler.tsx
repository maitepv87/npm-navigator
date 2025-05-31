import { Snackbar, Alert } from "@mui/material";
import { useState, useEffect } from "react";

interface ErrorHandlerProps {
  error: string | null;
}

export const ErrorHandler = ({ error }: ErrorHandlerProps) => {
  const [open, setOpen] = useState(!!error);

  useEffect(() => {
    if (error) setOpen(true);
  }, [error]);

  const handleClose = () => setOpen(false);

  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
        {error}
      </Alert>
    </Snackbar>
  );
};
