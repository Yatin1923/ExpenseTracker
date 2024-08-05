import "./App.css";
import Onboarding from "./pages/onboarding/Onboarding.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/onboarding/signup/Signup.tsx";
import Home from "./pages/home/Home.tsx";
import React from "react";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Onboarding />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
