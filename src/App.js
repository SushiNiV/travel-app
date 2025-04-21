import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/header/header"; 
import LoginRegister from "./pages/log-reg";
import Home from "./pages/home"; 
import { AuthProvider } from "./context/auth/auth"; // Make sure this path is correct!
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
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;