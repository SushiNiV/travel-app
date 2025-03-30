import React, { useState, useEffect } from "react";
import Login from "./login/login";
import Register from "./register/register";
import "./log-reg.css";
import camp from "../assets/camp.png";
import camp1 from "../assets/camp1.png";
import vid1 from "../assets/vid.mp4";

function LoginRegister({ reset }) {
  const [isLogin, setIsLogin] = useState(true);
  const [videoVisible, setVideoVisible] = useState(false);

  useEffect(() => {
    if (reset) {
      setIsLogin(true); 
    }
  }, [reset]); 

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="log-regp">
    <div className={`lcontainer ${!isLogin ? "sign-up-mode" : ""}`}>
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
      <div className="video-overlay"></div> 

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
    </section>
  );
}

export default LoginRegister;