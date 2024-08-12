import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import slideImg1 from "../../../images/onboarding/Onboarding-img1.png";
import slideImg2 from "../../../images/onboarding/Onboarding-img2.png";
import slideImg3 from "../../../images/onboarding/Onboarding-img3.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay ,Navigation, Pagination} from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const LoginSignup = () => {
  const [showMain, setShowMain] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMain(true);
    }, 3000); // Display "Welcome to Our App!" for 3 seconds
    return () => clearTimeout(timer);
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
        "Track your transaction easily, with categories and financial report",
      image: slideImg2,
    },
    {
      title: "Planning ahead",
      subtitle: "Setup your budget for each category so you are in control",
      image: slideImg3,
    },
  ];

  const handleSignUpClick = () => {
    navigate('/signup');
  };
  
  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <Container
      sx={{
        textAlign: "center",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#FFF", 
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 !important",
        margin: "0 !important",
      }}
    >
      {showMain ? (
        <>
          <Box sx={{ width: "100%", flex: 1 }}>
            <Swiper
              modules={[Autoplay,Navigation, Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              autoplay={{ delay: 2000 }} // Autoplay with 3 seconds interval
              loop={true} // Loop through slides
            >
              {slides.map((slide, i) => (
                <SwiperSlide key={i}>
                  <Box sx={{ padding: 2, textAlign: 'center' }}>
                    <img
                      src={slide.image}
                      alt={`slide-${i}`}
                      style={{
                        width: "100%",
                        height: "auto",
                        maxWidth: "600px",
                        margin: "0 auto", // Center image
                      }}
                    />
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{ fontSize: "32px", fontWeight: "bold", marginTop: "20px" }}
                    >
                      {slide.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#91919F" }}>
                      {slide.subtitle}
                    </Typography>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "85vw",
              padding: "20px",
              marginTop: "auto", 
              marginBottom: "40px", 
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
              onClick={handleSignUpClick}
            >
              Sign Up
            </Button>
            <Button
              variant="outlined"
              sx={{
                background: "#EEE5FF",
                height: "56px",
                color: "#7F3DFF",
                border: "1px solid #EEE5FF",
                borderRadius: "16px",
              }}
              onClick={handleLoginClick}
            >
              Login
            </Button>
          </Box>
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
            margin: 0, 
            padding: 0, 
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
