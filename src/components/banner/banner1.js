import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./banner1.css";
import vid from "../../assets/vid.mp4";
import vid1 from "../../assets/vid1.mp4";

function NavBar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const videos = [vid, vid1];

  const content = [
    {
      title: "Roam",
      subtitle: "Aurora",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulu. Nulla malesuada dui ac libero venenatis, a scelerisque lorem tempus. Etiam ut convallis ligula. Nulla volutpat, nisi in cursus mollis, orci odio auctor ligula, non dictum turpis metus at augue. Sed feugiat ut turpis in vestibulum. In vel mi ligula.",
      linkText: "Explore More"
    },
    {
      title: "Roam",
      subtitle: "Aurora",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Nulla malesuada dui ac libero venenatis, a scelerisque lorem tempus. Etiam ut convallis ligula. Nulla volutpat, nisi in cursus mollis, orci odio auctor ligula, non dictum turpis metus at augue. Sed feugiat ut turpis in vestibulum. In vel mi ligula.",
      linkText: "Learn More"
    }
  ];

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
        ></video>
      ))}

      {/* Content that changes with each video */}
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

      <div className="slider-nav">
        {videos.map((_, index) => (
          <div
            key={index}
            className={`nav-btn ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          ></div>
        ))}
      </div>
    </section>
  );
}

export default NavBar;