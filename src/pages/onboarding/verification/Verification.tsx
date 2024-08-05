import React, { useState } from "react";
import './Verification.css';
import {
  Container,
  Box,
  Typography,
  Button,
  TextField,
  Grid,
  IconButton,
  Link,
} from "@mui/material";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import { ArrowBack, Style } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Verification: React.FC = () => {
  const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
  const [showKeyboard, setShowKeyboard] = useState(false);
  const navigate = useNavigate();
  const handleInputChange = (index: number, value: string) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    if (value && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleKeyboardInput = (button: string) => {
    const currentIndex = code.findIndex((val) => val === "");
    if (button === "{bksp}") {
      const lastIndex = currentIndex === -1 ? 5 : currentIndex - 1;
      handleInputChange(lastIndex, "");
      const prevInput = document.getElementById(`code-${lastIndex}`);
      if (prevInput) prevInput.focus();
    } else if (currentIndex !== -1) {
      handleInputChange(currentIndex, button);
    }
  };

  const handleBackClick = () => {
    navigate(-1); // This will navigate back to the previous page
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        textAlign: "center",
        mt: 5,
        backgroundColor: "#FFF",
        p: 2,
        borderRadius: 2,
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
          Verification
        </Typography>
      </Box>
      <Box sx={{ textAlign: "left" }}>
        <Typography sx={{ fontWeight: "bold", fontSize: "36px", width: "80%" }}>
          Enter your Verification Code
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2, mb: 2 }}>
          {code.map((digit, index) => (
            <TextField
              key={index}
              id={`code-${index}`}
              inputProps={{
                maxLength: 1,
                style: { textAlign: "center", fontSize: "24px",height:'1rem' },
              }}
              sx={{ width: 40, margin: 1 }}
              value={digit}
              onChange={(e) => handleInputChange(index, e.target.value)}
              onFocus={() => setShowKeyboard(true)}
            />
          ))}
        </Box>
        <Typography variant="body2" color="textSecondary" gutterBottom  sx={{color:'#7F3DFF',fontWeight:'bold'}}>
          04:59
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom sx={{ fontWeight:'bold',mt:'10px'}}>
          We sent a verification code to your email brajaoma*****@gmail.com. You
          can check your inbox.
        </Typography>
        <Typography variant="body2" gutterBottom sx={{mt:'15px'}}>
            <Link   sx={{color:'#7F3DFF', textDecoration:'none',fontWeight:'bold' , borderBottom:'1px solid #7F3DFF'}}>
            I didn’t receive the code? Send again
            </Link>
          
        </Typography>
      </Box>

      <Button
        variant="contained"
        
        fullWidth
        sx={{
            mb: 2,
            mt:4,
            height: "56px",
            borderRadius: "16px",
            textTransform: "none",
            fontSize:'18px',
            fontWeight:'bold',
            backgroundColor:'#7F3DFF'
          }}
      >
        Verify
      </Button>
      {showKeyboard && (
        <Keyboard
    
          layout={{
            default: ["1 2 3", "4 5 6", "7 8 9", "0 {bksp}"],
             
          }}
          display={{
            "{bksp}": "Back",
          }}
          onKeyPress={handleKeyboardInput}
        />
      )}
    </Container>
  );
};

export default Verification;
