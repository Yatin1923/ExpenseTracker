import "./App.css";
import Onboarding from "./pages/onboarding/Onboarding.tsx";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Signup from "./pages/onboarding/signup/Signup.tsx";
import Home from "./pages/home/Home.tsx";
import React from "react";
import SetPin from "./pages/onboarding/set-pin/Setpin.tsx";
import SignupSuccess from "./pages/onboarding/signUp-success/SignupSuccess.tsx";
import Login from "./pages/onboarding/login/Login.tsx";
import Verification from "./pages/onboarding/verification/Verification.tsx";
import Footer from "./components/footer/Footer.tsx";
import Transaction from "./pages/transactionPage/TransactionPage.tsx";
import Profile from "./pages/profile/profile.tsx";
import Settings from "./pages/profile/settings/settings.tsx";
// import SetPin from "./pages/onboarding/set-pin/SetPin.tsx";
function App() {
  return (
    <div className="App">
      <Router>
       <AppRoutes></AppRoutes>
       <FooterWrapper/>
      </Router>
    </div>
  );
}
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Onboarding />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signup-verification" element={<Verification />} />
      <Route path="/login" element={<Login />} />
      <Route path="/set-pin" element={<SetPin />} />
      <Route path="/signup-success" element={<SignupSuccess />} />
      <Route path="/home" element={<Home />} />
      <Route path="/home/transaction" element={<Transaction />} />
      <Route path="/home/profile" element={<Profile />}></Route>
      <Route path="/Settings" element={<Settings />}></Route>
    </Routes>
  );
}
function FooterWrapper() {
  const location = useLocation();

  return location.pathname.includes("home") ? <Footer /> : null;
}

export default App;

