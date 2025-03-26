import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/header/header"; 
import LoginRegister from "./pages/log-reg";
import Banner1 from "./components/banner/banner1";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Banner1 />} />
        <Route path="/login" element={<LoginRegister />} /> 
      </Routes>
    </Router>
  );
}

export default App;