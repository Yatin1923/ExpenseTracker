import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";

const Setting = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1); // This will navigate back to the previous page
  };
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 5,
        }}
      >
         <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            color: "#212325",
            fontWeight: "bold",
            mb: 6,
            position: "relative",
          }}
        >
        <IconButton
          onClick={handleBackClick}
          sx={{
            color: "#212325",
            fontWeight: "bold",
            position: "absolute",
            left: 0,
          }}
        >
          <ArrowBack />
        </IconButton>
        <Typography
          variant="h5"
          component="h1"
          sx={{
            color: "#212325",
            fontWeight: "bold",
            fontSize: "20px",
            textAlign: "center",
            flexGrow: 1,
          }}
        >
          settings
        </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Setting;
