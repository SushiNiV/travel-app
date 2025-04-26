import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/header/header"; 
import LoginRegister from "./pages/log-reg";
import Home from "./pages/home/home"; 
import RestoBar from "./pages/amenities/resto-bar/resto-bar"; 
import { AuthProvider } from "./context/auth/auth"; 
import "./App.css"; 

function App() {
  const [resetLogin, setResetLogin] = useState(false);

  const handleLoginReset = () => {
    setResetLogin(prevState => !prevState); 
  };

  return (
    <AuthProvider>
      <Router>
        <NavBar onLoginReset={handleLoginReset} /> 
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route 
            path="/login" 
            element={<LoginRegister reset={resetLogin} />} 
          />
          <Route path="/resto-bar" element={<RestoBar />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;