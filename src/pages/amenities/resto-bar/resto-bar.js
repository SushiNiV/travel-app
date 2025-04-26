import React, { useEffect, useRef, useState } from 'react';
import leaves from '../../../assets/leaves.png';
import img1 from '../../../assets/1.png';
import img2 from '../../../assets/2.png';
import img3 from '../../../assets/3.png';
import img4 from '../../../assets/4.png';
import img5 from '../../../assets/5.png';
import './resto-bar.css';

const RestoBar = () => {
  const listRef = useRef(null);
  const itemsRef = useRef([]);
  const [active, setActive] = useState(1);
  const [widthItem, setWidthItem] = useState(0);

  const images = [img1, img2, img3, img4, img5];
  
  // Text for each image to display in the circle
  const circleTexts = [
    "Image 1 Description - Relax and unwind at Roamora",
    "Image 2 Description - Explore the atmosphere",
    "Image 3 Description - Enjoy our delicious cocktails",
    "Image 4 Description - A perfect spot for dining",
    "Image 5 Description - Join us for unforgettable moments"
  ];

  useEffect(() => {
    setWidthItem(itemsRef.current[1]?.offsetWidth || 0);
    runCarousel();
    setCircleText();
  }, []);

  useEffect(() => {
    runCarousel();
    setCircleText(); // Update the circle text when the active index changes
  }, [active]);

  const runCarousel = () => {
    const list = listRef.current;
    const leftTransform = widthItem * (active - 1) * -1;
    list.style.transform = `translateX(${leftTransform}px)`;
    document.querySelector('.item.active')?.classList.remove('active');
    itemsRef.current[active]?.classList.add('active');
  };

  const setCircleText = () => {
    const circle = document.querySelector('.circle');
    const text = circleTexts[active]; // Use the active index to fetch the text
    
    // Split the text into individual characters for the rotating effect
    const characters = text.split('');
    circle.innerHTML = ''; // Clear existing content
    
    characters.forEach((char, i) => {
      const span = document.createElement('span');
      span.innerText = char;
      const rotate = (360 / characters.length) * (i + 1);
      span.style.setProperty('--rotate', `${rotate}deg`);
      circle.appendChild(span);
    });
  };

  const handleNext = () => {
    if (active < itemsRef.current.length - 1) {
      setActive(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (active > 0) {
      setActive(prev => prev - 1);
    }
  };

  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <div className="slider">
        <div className="list" ref={listRef}>
          {images.map((src, index) => (
            <div
              className={`item ${index === 1 ? 'active' : ''}`}
              key={index}
              ref={el => itemsRef.current[index] = el}
            >
              <img src={src} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>

        <div className="circle">
          {/* Circle text is dynamically set based on active index */}
        </div>

        <div className="content">
          <div>menu</div>
          <div style={{ position: 'relative' }}>
            restaurant
            <div
              style={{
                position: 'absolute',
                left: '60%',
                bottom: '50%',
                width: '80px',
                height: '80px',
                backgroundImage: `url(${leaves})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                pointerEvents: 'none',
              }}
            />
          </div>
        </div>

        <div className="arow">
          <button id="prev" onClick={handlePrev} style={{ display: active === 0 ? 'none' : 'block' }}>
            &lt;
          </button>
          <button id="next" onClick={handleNext} style={{ display: active === 4 ? 'none' : 'block' }}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestoBar;