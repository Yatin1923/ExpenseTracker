import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import slideImg1 from "../../../images/onboarding/Onboarding-img1.png";
import slideImg2 from "../../../images/onboarding/Onboarding-img2.png";

import slideImg3 from "../../../images/onboarding/Onboarding-img3.png";

const LoginSignup = () => {
  const [index, setIndex] = useState(0);
  const handleChangeIndex = (index) => {
    setIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      title: "Gain total control of your money",
      subtitle: "Become your own money manager and make every cent count",
      image: slideImg1,
    },
    {
      title: "Know where your money goes",
      subtitle:
        "Track your transaction easily,with categories and financial report",
      image: slideImg2,
    },
    {
      title: "planning ahead",
      subtitle: "Setup your budget for each category so you in control",
      image: slideImg3,
    },
  ];

  return (
    <Container
      maxWidth="xs"
      sx={{ textAlign: "center", mt: 5, backgroundColor: "#FFF" }}
    >
      <SwipeableViews index={index} onChangeIndex={handleChangeIndex}>
        {slides.map((slide, i) => (
          <Box key={i} sx={{ padding: 3 }}>
            <img
              src={slide.image}
              alt={`slide-${i}`}
              style={{ width: "100%", height: "auto" }}
            />
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontSize: "32px", fontWeight: "Bold" }}
            >
              {slide.title}
            </Typography>
            <Typography variant="body1" sx={{ color: "#91919F" }}>
              {slide.subtitle}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              {slides.map((_, dotIndex) => (
                <Box
                  key={dotIndex}
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor:
                      dotIndex === index ? "primary.main" : "grey.400",
                    mx: 0.5,
                    transition: "background-color 0.3s",
                  }}
                />
              ))}
            </Box>
          </Box>
        ))}
      </SwipeableViews>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "85vw",
          padding: "20px",
        }}
      >
        <Button
          variant="contained"
          sx={{
            mb: 2,
            background: "#7F3DFF",
            height: "56px",
            borderRadius: "16px",
             
          }}
        >
          Sign Up
        </Button>
        <Button
          variant="outlined"
          sx={{
            mb: 2,
            background: "#EEE5FF",
            height: "56px",
            color: "#7F3DFF",
            border: "1px solid #EEE5FF",
            borderRadius: "16px",
          }}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default LoginSignup;
