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
import { Visibility, VisibilityOff,ArrowBack  } from "@mui/icons-material";
import { Link , useNavigate } from "react-router-dom";

const SignUp = () => {
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
        <Box sx={{display:'flex',alignItems:'center',width:'100%',color:'#212325', fontWeight:'bold',mb:6 , position:'relative'}}>
        <IconButton onClick={handleBackClick} sx={{ color:'#212325', fontWeight:'bold',position:'absolute' , left:0}}>
          <ArrowBack />
        </IconButton>
        <Typography variant="h5" component="h1" sx={{ color:'#212325', fontWeight:'bold', textAlign:'center' , flexGrow:1}}>
          Sign Up
        </Typography>
        </Box>
       

        <TextField fullWidth label="Name" margin="normal" variant="outlined" />

        <TextField fullWidth label="Email" margin="normal" variant="outlined" />

        <TextField
          fullWidth
          label="Password"
          type={showPassword ? "text" : "password"}
          margin="normal"
          variant="outlined"
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

        <FormControlLabel
          control={<Checkbox name="terms" />}
          label={
            <Typography variant="body2">
              By signing up, you agree to the{" "}
              <Link to="/terms">Terms of Service</Link> and{" "}
              <Link to="/privacy">Privacy Policy</Link>
            </Typography>
          }
          sx={{ alignSelf: "start", mb: 2 }}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            mb: 2,
            background: "#7F3DFF",
            height: "56px",
            borderRadius: "16px",
            textTransform: "none",
          }}
        >
          Sign Up
        </Button>

        <Typography variant="body2" sx={{ mb: 2 }}>
          Or with
        </Typography>

        <Button
          variant="outlined"
          fullWidth
          sx={{
            mb: 2,
            height: "56px",
            borderRadius: "16px",
            textTransform: "none",
          }}
        >
          <img
            src="https://img.icons8.com/color/16/000000/google-logo.png"
            alt="Google logo"
            style={{ marginRight: "8px" }}
          />
          Sign Up with Google
        </Button>

        <Typography variant="body2">
          Already have an account? <Link to="/login">Login</Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default SignUp;
