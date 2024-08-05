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
import { Visibility, VisibilityOff, ArrowBack } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
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
            Login
          </Typography>
        </Box>
        <Box sx={{display:'flex' , flexDirection:'column' , gap:1, width:'100%', pb:'2.5rem'}}>
        <TextField
          fullWidth
          label="Email"
          margin="normal"
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "20px",
            },
          }}
        />

        <TextField
          fullWidth
          label="Password"
          type={showPassword ? "text" : "password"}
          margin="normal"
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "20px",
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        </Box>
      

        <Button
          variant="contained"
          fullWidth
          sx={{
            mb: 2,
            height: "56px",
            borderRadius: "16px",
            textTransform: "none",
            fontSize: "18px",
            fontWeight: "bold",
            backgroundColor: "#7F3DFF",
          }}
        >
          Login
        </Button>
       <Box sx={{display:'flex' , flexDirection:'column', gap:2, pt:'1rem'}}>
       <Typography variant="body2" sx={{ mb: 2, fontSize: "14px" }}>
          <Link
            to="/reset-password"
            style={{ color: "#7F3DFF", fontWeight: "bold",textDecoration:'none' }}
          >
            Forgot Password?
          </Link>
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: "#91919F", fontWeight: "bold", fontSize: "14px" }}
        >
          Don't have an account yet?{" "}
          <Link to="/signup" style={{ color: "#7F3DFF", fontWeight: "bold" }}>
            Sign Up
          </Link>
        </Typography>

       </Box>
    
      </Box>
    </Container>
  );
};

export default Login;
