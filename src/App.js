import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/header/header"; 
import LoginRegister from "./pages/log-reg";
import Home from "./pages/home"; 
import "./App.css"; 

function App() {
  const [resetLogin, setResetLogin] = useState(false);

  const handleLoginReset = () => {
    setResetLogin(prevState => !prevState); 
  };

  return (
    <Router>
      <NavBar onLoginReset={handleLoginReset} /> 
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route 
          path="/login" 
          element={<LoginRegister reset={resetLogin} />} 
        /> 
      </Routes>
    </Router>
  );
}

export default App;