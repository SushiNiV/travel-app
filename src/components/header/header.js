import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth/auth";
import "./header.css";
import SecondNav from "../header/second-header/sec-header";
import logo from "../../assets/logo.png";
import wordmark from "../../assets/wordmark.png";

const NavBar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { isLoggedIn, logout } = useAuth();

  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="main-header">
      <div className="logo-container">
        <img src={logo} alt="Hotel Logo" className="logo" />
        <img src={wordmark} alt="Hotel Wordmark" className="wm" />
      </div>

      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>

          <li
            className="nav-item dropdown"
            onMouseEnter={() => handleMouseEnter("rooms")}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="#" className={`nav-link ${activeDropdown === "rooms" ? "active" : ""}`}>
              Rooms <span className={`caret ${activeDropdown === "rooms" ? "rotate" : ""}`}>&#9662;</span>
            </Link>
            <SecondNav type="rooms" isVisible={activeDropdown === "rooms"} />
          </li>

          <li
            className="nav-item dropdown"
            onMouseEnter={() => handleMouseEnter("amenities")}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="#" className={`nav-link ${activeDropdown === "amenities" ? "active" : ""}`}>
              Amenities <span className={`caret ${activeDropdown === "amenities" ? "rotate" : ""}`}>&#9662;</span>
            </Link>
            <SecondNav type="amenities" isVisible={activeDropdown === "amenities"} />
          </li>

          <li className="nav-item">
            <Link to="#" className="nav-link">Gallery</Link>
          </li>

          <li
            className="nav-item dropdown"
            onMouseEnter={() => handleMouseEnter("info")}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="#" className={`nav-link ${activeDropdown === "info" ? "active" : ""}`}>
              Contact Us <span className={`caret ${activeDropdown === "info" ? "rotate" : ""}`}>&#9662;</span>
            </Link>
            <SecondNav type="info" isVisible={activeDropdown === "info"} />
          </li>
        </ul>

        <div className="login-btn">
          {isLoggedIn ? (
            <button onClick={logout}>LOG OUT</button>
          ) : (
            <Link to="/login" className="login-link">LOG IN</Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;