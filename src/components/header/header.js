import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./header.css";
import logo from "../../assets/logo.png"; 
import wordmark from "../../assets/wordmark.png";

function NavBar({ onLoginReset }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); 

  const logout = () => {
    setIsLoggedIn(false);
  };

  const goToLogin = () => {
    onLoginReset(); // Trigger the reset before navigating
    navigate("/login"); // Navigate to login page
  };

  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="Roamora Logo" className="logo" />
        <img src={wordmark} alt="Roamora Wordmark" className="wm" />
      </div>

      <nav className="navbar">
        <div className="nav-list">
          <a href="/">Home</a>
          <a href="/">Destination</a>
          <a href="/">Gallery</a>
          <a href="/">Blog</a>
          <a href="/">Contact Us</a>
        </div>
      </nav>

      <div className="login-btn">
        {isLoggedIn ? (
          <button onClick={logout}>LOG OUT</button>
        ) : (
          <button onClick={goToLogin}>LOG IN</button>
        )}
      </div>
    </header>
  );
}

export default NavBar;