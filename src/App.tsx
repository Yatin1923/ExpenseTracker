import "./App.css";
import Onboarding from "./pages/onboarding/Onboarding.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/onboarding/signup/Signup.tsx";
import Home from "./pages/home/Home.tsx";
import React from "react";
import SetPin from "./pages/onboarding/set-pin/Setpin.tsx";
import SignupSuccess from "./pages/onboarding/signUp-success/SignupSuccess.tsx";
import Login from "./pages/onboarding/login/Login.tsx";
import Verification from "./pages/onboarding/verification/Verification.tsx";
import Profile from "./pages/profile/profile.tsx";
// import SetPin from "./pages/onboarding/set-pin/SetPin.tsx";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Onboarding />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/signup-verification" element={<Verification/>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/set-pin" element={<SetPin />}></Route>
          <Route path="/signup-success" element={<SignupSuccess />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

