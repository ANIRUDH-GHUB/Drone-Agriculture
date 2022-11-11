import Collapse from "@mui/material/Collapse";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import React, { useState, useEffect, useRef } from "react";

import "./Alert.scss";

const CustomAlert = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<
    "success" | "error" | "info" | "warning"
  >("success");

  useEffect(() => {
    window.addEventListener("alert", setAlert);
  });
  const setAlert = (event: any) => {
    setOpen(true);
    setMessage(event.detail.message);
    setSeverity(event.detail.severity);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };
  return (
    <Collapse in={open}>
      <Alert
        className="alert"
        severity={severity}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setOpen(false);
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ mb: 2 }}
      >
        {message}
      </Alert>
    </Collapse>
  );
};

export default CustomAlert;
