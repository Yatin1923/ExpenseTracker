import React, { useState, useEffect, useRef } from 'react';
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
 
  const navigate = useNavigate();
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
   
  const handleInputChange = (index: number, value: string) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    if (value && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && code[index] === '' && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  useEffect(() => {
    inputsRef.current = inputsRef.current.slice(0, code.length);
  }, [code]);
   

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
        <Typography sx={{ fontWeight: "bold", fontSize: "36px", width: "80%",mt: '30%'}}>
          Enter your Verification Code
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 5, mb: 5 }}>
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
              onKeyDown={(e:any) => handleKeyDown(index, e)}
              ref={(el:HTMLInputElement) => (inputsRef.current[index] = el!)}
            
            />
          ))}
        </Box>
        <Typography variant="body2" color="textSecondary" gutterBottom  sx={{color:'#7F3DFF',fontWeight:'bold'}}>
          04:59
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom sx={{ fontWeight:'bold',mt:'10px'}}>
          We sent a verification code to your email <span style ={{color:'#7F3DFF',fontWeight:'bold'}}> brajaoma*****@gmail.com. </span>
          {"  "}You can check your inbox.
        </Typography>
        <Typography variant="body2" gutterBottom sx={{mt:4}}>
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
            mt:5,
            background: "#7F3DFF",
            height: "56px",
            borderRadius: "16px",
          }}
      >
        Verify
      </Button>
      
    </Container>
  );
};

export default Verification;
