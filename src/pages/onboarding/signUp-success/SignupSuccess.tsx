import React from "react";
import { Box, Typography } from "@mui/material";
import successImg from "../../../images/success.png"; // Adjust the path as necessary


const SignupSuccess = () => {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundColor: "#fff",
        }}
      >
        <Box
          
        >
          <img
            src={successImg}
            alt="Success"
            style={{
              width: "100px", // Adjust size as needed
              height: "100px", // Adjust size as needed
            }}
          />
        </Box>
        <Typography sx={{ marginTop: 2, fontSize: "24px", fontWeight: "bold" }}>
          You are set!
        </Typography>
      </Box>
    );
  };
  
  export default SignupSuccess;
  