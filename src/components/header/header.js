import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../assets/logo.png"; 
import wordmark from "../../assets/wordmark.png";

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logout = () => {
    setIsLoggedIn(false);
  };
  
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="Roamora Logo" className="logo" />
        <img src={wordmark} alt="Roamora Wordmark" className="wm" />
      </div>

      <nav className="navbar">
        <div className="nav-list">
          <Link to="/">Home</Link>
          <Link to="/">Destination</Link>
          <Link to="/">Gallery</Link>
          <Link to="/">Blog</Link>
          <Link to="/">Contact Us</Link>
        </div>
      </nav>
      <div className="login-btn">
        {isLoggedIn ? (
          <button onClick={logout}>LOG OUT</button>
        ) : (
          <Link to="/login">LOG IN</Link>
        )}
      </div>
    </header>
  );
}

export default NavBar;
