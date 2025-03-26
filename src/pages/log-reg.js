import React, { useState, useEffect } from "react";
import Login from "./login/login";
import Register from "./register/register";
import "./log-reg.css";
import camp from "../assets/camp.png";
import camp1 from "../assets/camp1.png";
import vid1 from "../assets/vid1.mp4";

function LoginRegister() {
  const [isLogin, setIsLogin] = useState(true);
  const [videoVisible, setVideoVisible] = useState(false);  // Control the video visibility

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  useEffect(() => {
    // Wait for 2 seconds to trigger the video visibility
    const timer = setTimeout(() => {
      setVideoVisible(true); // Make the video visible after 2 seconds
    }, 2000); // This time should match the transition time

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <div className={`container ${!isLogin ? "sign-up-mode" : ""}`}>
      {/* Video with the transition */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className={`video-bg ${videoVisible ? "visible" : ""}`}
      >
        <source src={vid1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>Join us today and explore amazing features!</p>
            <button className="btn transparent" onClick={toggleForm}>
              Sign up
            </button>
          </div>
          <img src={camp1} className="image" alt="Login Illustration" />
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3>Already a member?</h3>
            <p>Sign in to continue your journey with us!</p>
            <button className="btn transparent" onClick={toggleForm}>
              Sign in
            </button>
          </div>
          <img src={camp} className="image" alt="Register Illustration" />
        </div>
      </div>

      <div className="forms-container">
        <div className={`form-wrapper login ${isLogin ? "" : "hidden"}`}>
          <Login />
        </div>
        <div className={`form-wrapper register ${isLogin ? "hidden" : ""}`}>
          <Register />
        </div>
      </div>
    </div>
  );
}

export default LoginRegister;