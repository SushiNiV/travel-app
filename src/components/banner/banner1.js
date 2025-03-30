import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./banner1.css";
import vid from "../../assets/vid.mp4";
import vid1 from "../../assets/vid1.mp4";
import vid2 from "../../assets/vid2.mp4";

function Banner1() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState('r2l'); 
  const videos = [vid, vid1, vid2];

  const content = [
    {
      title: "Roam",
      subtitle: "Aurora",
      description:
        "Step into a world where comfort, elegance, and exceptional service come together. Whether you're seeking a peaceful retreat, an exciting adventure, or the perfect blend of both, we offer an experience that exceeds expectations. From the moment you arrive, every detail is crafted to make your stay truly unforgettable.",
      linkText: "Explore More"
    },
    {
      title: "Comfort",
      subtitle: "Meets Style",
      description:
        "Find a space designed to make you feel at home, yet far from the ordinary. Every corner is thoughtfully curated to bring you relaxation and ease, whether you're here for business, leisure, or a little bit of both. Unwind in a setting that blends warmth, sophistication, and modern convenience.",
      linkText: "Learn More"
    },
    {
      title: "Indulging",
      subtitle: "Moments",
      description:
        "Escape from the everyday and immerse yourself in a world of serenity. Whether it's a peaceful morning, a quiet afternoon, or a refreshing evening, find the perfect setting to unwind and embrace the moment. Every experience is designed to help you recharge, so you leave feeling renewed and inspired.",
      linkText: "Discover More"
    }
  ];

  function handleSlideChange(direction) {
    if (direction === 'next') {
      setActiveIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
      setAnimationDirection('r2l');  
    } else {
      setActiveIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
      setAnimationDirection('l2r'); 
    }
  }

  function handlePaginationClick(index) {
    const direction = index > activeIndex ? 'r2l' : 'l2r'; 
    setAnimationDirection(direction);
    setActiveIndex(index);
  }

  return (
    <section className="banner1">
      {videos.map((video, index) => (
        <video
          key={index}
          className={`video ${index === activeIndex ? "active" : "hidden"}`}
          src={video}
          autoPlay
          loop
          muted
          style={{
            animation: `${animationDirection} 2s ease forwards`  
          }}
        ></video>
      ))}
      
      <div className="overlay-gradient"></div>

      <div className="banner1-container">
        <h1>
          {content[activeIndex].title} <br />
          <span>{content[activeIndex].subtitle}</span>
        </h1>
        <p>{content[activeIndex].description}</p>
        <a href="/">{content[activeIndex].linkText}</a>
      </div>

      <div className="banner1-media">
        <a href="/"><i className="fab fa-facebook-f"></i></a>
        <a href="/"><i className="fab fa-twitter"></i></a>
        <a href="/"><i className="fab fa-instagram"></i></a>
        <a href="/"><i className="fab fa-youtube"></i></a>
      </div>

      <div className="arrow-nav">
        <div className="arrow-btn prev" onClick={() => handleSlideChange('prev')}>
          <i className="fas fa-chevron-left"></i> 
        </div>

        <div className="arrow-btn next" onClick={() => handleSlideChange('next')}>
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>


      <div className="slider-nav">
        {videos.map((_, index) => (
          <div
            key={index}
            className={`nav-btn ${index === activeIndex ? "active" : ""}`}
            onClick={() => handlePaginationClick(index)}  
          ></div>
        ))}
      </div>

    </section>
  );
}

export default Banner1;