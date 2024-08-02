import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import slideImg1 from "../../../images/onboarding/Onboarding-img1.png";
import slideImg2 from "../../../images/onboarding/Onboarding-img2.png";

import slideImg3 from "../../../images/onboarding/Onboarding-img3.png";

const LoginSignup = () => {
  const [index, setIndex] = useState(0);
  const [showMain, setShowMain] = useState(false);
  const handleChangeIndex = (index) => {
    setIndex(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMain(true);
    }, 3000); // Display "Welcome to Our App!" for 5 seconds
    return () => clearTimeout(timer);
  }, []);

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
      sx={{
        textAlign: "center",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#FFF", // Ensure background color is white
        transition: "opacity 0.5s ease-in-out",
        opacity: 1, // Fade in/out effect
        transform: showMain ? "translateY(0)" : "translateY(0px)", // Slide effect issue of margin on home page here
        transition: "transform 0.3s ease-in-out", // Smooth slide-in
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Center horizontally
        justifyContent: "center", // Center vertically
        margin: "0px !important",
        padding: "0px !important",
      }}
    >
      {showMain ? (
        <>
          <Container>
            <SwipeableViews index={index} onChangeIndex={handleChangeIndex}>
              {slides.map((slide, i) => (
                <Box key={i} sx={{ padding: 2, mt: 5 }}>
                  <img
                    src={slide.image}
                    alt={`slide-${i}`}
                    style={{
                      width: "100%",
                      height: "auto",
                      paddingBottom: "5vh",
                    }}
                  />
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ fontSize: "32px", fontWeight: "bold" }}
                  >
                    {slide.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#91919F" }}>
                    {slide.subtitle}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mt: 2,
                      alignItems: "center",
                    }}
                  >
                    {slides.map((_, dotIndex) => (
                      <Box
                        key={dotIndex}
                        sx={{
                          width: dotIndex === index ? 15 : 10,
                          height: dotIndex === index ? 15 : 10,
                          borderRadius: "50%",
                          backgroundColor:
                            dotIndex === index ? "#7F3DFF" : "grey.400",
                          mx: 0.5,
                          transition: "background-color 0.5s ease-in-out",
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
        </>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
            height: "100vh",
            backgroundColor: "#7F3DFF",
            color: "#fff",
            transition: "opacity 1s ease-in-out",
            opacity: 1,
            margin: 0, // Remove default margin
            padding: 0, // Remove default padding
          }}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "56px" }}>
            m
            <span
              style={{
                background:
                  "radial-gradient(circle, rgba(255,192,203,1) 0%, rgba(255,192,203,0.5) 50%, rgba(255,192,203,0) 100%)",
                borderRadius: "50%",
                padding: "0 10px",
                display: "inline-block",
                lineHeight: "1",
              }}
            >
              o
            </span>
            ntra
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default LoginSignup;
