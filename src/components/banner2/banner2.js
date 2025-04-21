import React, { useState, useEffect, useRef } from 'react';
import './banner2.css'; 
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'
import img5 from '../../assets/img5.png'
import img6 from '../../assets/img6.png'

const Banner2 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slidesContainerRef = useRef(null);
    const itemsRef = useRef([]);
    const intervalRef = useRef(null); 

    const images = [
        {
            url: img1,
            name: 'Rooms and Suites',
            description: 'Experience a world of comfort and sophistication in our elegantly designed rooms and suites. Thoughtfully crafted with modern amenities and stunning interiors, each space offers the perfect balance of relaxation and style for an unforgettable stay.',
        },
        {
            url: img2,
            name: 'Infinity Pool',
            description: 'Take a refreshing dip in our stunning infinity pool, where crystal-clear waters meet the horizon. Relax by the poolside with a cool drink and soak in the serene ambiance.',
        },
        {
            url: img3,
            name: 'World-class Dining',
            description: 'Savor a delightful culinary experience with our exquisite dining options. From gourmet dishes prepared by top chefs to refreshing drinks at our rooftop lounge, every meal is a treat for your senses.',
        },
        {
            url: img4,
            name: 'Spa & Wellness Center',
            description: 'Escape into a haven of tranquility. Indulge in pure relaxation at our world-class spa. From soothing massages to holistic wellness treatments, let our expert therapists rejuvenate your body and mind.',
        },
        {
            url: img5,
            name: 'Fitness Center',
            description: 'Stay energized and maintain your fitness routine with our state-of-the-art gym facilities. Whether you prefer cardio workouts, strength training, or personal coaching, our fully equipped fitness center has everything you need.',
        },
        {
            url: img6,
            name: 'Grand Ballroom',
            description: 'Whether you\'re planning a grand wedding, a corporate conference, or an intimate gathering, our elegant event spaces and business facilities offer the perfect setting for every occasion, with expert services to ensure a seamless experience.',
        },
    ];

    const updateSlideDisplay = () => {
        if (itemsRef.current) {
            itemsRef.current.forEach((item, index) => {
                const content = item.querySelector('.banner2-content');
                if (content) {
                    content.style.display = index === 1 ? 'block' : 'none';
                }
            });
        }
    };

    const handleNext = () => {
        if (slidesContainerRef.current && itemsRef.current.length > 0) {
            const firstItem = itemsRef.current.shift();
            slidesContainerRef.current.appendChild(firstItem);
            itemsRef.current = Array.from(slidesContainerRef.current.querySelectorAll('.items2'));
            updateSlideDisplay();
        }
    };

    const handlePrev = () => {
        if (slidesContainerRef.current && itemsRef.current.length > 0) {
            const lastItem = itemsRef.current.pop();
            slidesContainerRef.current.prepend(lastItem);
            itemsRef.current = Array.from(slidesContainerRef.current.querySelectorAll('.items2'));
            updateSlideDisplay();
        }
    };

    const startAutoSlide = () => {
        intervalRef.current = setInterval(() => {
            handleNext();
        }, 5000); 
    };

    const stopAutoSlide = () => {
        clearInterval(intervalRef.current);
    };

    useEffect(() => {
        if (slidesContainerRef.current) {
            itemsRef.current = Array.from(slidesContainerRef.current.querySelectorAll('.items2'));
        }
        updateSlideDisplay(); 
        startAutoSlide(); 

        
        return () => {
            stopAutoSlide();
        };
    }, []);

    return (
        <>
            <div className="banner2-container">
                <div className="slider-wrapper"> 
                    <div className="slides2" ref={slidesContainerRef}>
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className="items2"
                                style={{ backgroundImage: `url(${image.url})` }}
                                ref={(el) => (itemsRef.current[index] = el)}
                            >
                                <div className="banner2-content">
                                    <div className="b2-name">{image.name}</div>
                                    <div className="b2-des">{image.description}</div>
                                      <button>See More</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="arrow-nav">
                        <div className="arrow-btn prev" onClick={handlePrev}>
                            <i className="fas fa-chevron-left"></i>
                        </div>

                        <div className="arrow-btn next" onClick={handleNext}>
                            <i className="fas fa-chevron-right"></i>
                        </div>
                    </div>
                </div> 
            </div>
        </>
    );
};

export default Banner2;