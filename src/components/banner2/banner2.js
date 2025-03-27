import React, { useState, useEffect, useRef } from 'react';
import './banner2.css'; // Create this CSS file for your styles

const Banner2 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slidesContainerRef = useRef(null);
    const itemsRef = useRef([]);
    const intervalRef = useRef(null); // Ref to store the interval ID

    const images = [
        {
            url: 'https://i.ibb.co/qCkd9jS/img1.jpg',
            name: 'Switzerland',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
        },
        {
            url: 'https://i.ibb.co/jrRb11q/img2.jpg',
            name: 'Finland',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
        },
        {
            url: 'https://i.ibb.co/NSwVv8D/img3.jpg',
            name: 'Iceland',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
        },
        {
            url: 'https://i.ibb.co/Bq4Q0M8/img4.jpg',
            name: 'Australia',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
        },
        {
            url: 'https://i.ibb.co/jTQfmTq/img5.jpg',
            name: 'Netherlands',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
        },
        {
            url: 'https://i.ibb.co/RNkk6L0/img6.jpg',
            name: 'Ireland',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
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
        }, 3000); // Change slide every 3 seconds
    };

    const stopAutoSlide = () => {
        clearInterval(intervalRef.current);
    };

    useEffect(() => {
        if (slidesContainerRef.current) {
            itemsRef.current = Array.from(slidesContainerRef.current.querySelectorAll('.items2'));
        }
        updateSlideDisplay(); // Initial display setup
        startAutoSlide(); // Start automatic sliding

        // Cleanup function to clear the interval when the component unmounts
        return () => {
            stopAutoSlide();
        };
    }, []);

    return (
        <>
            <div className="banner2-container">
                <div className="slider-wrapper"> {/* New wrapper */}
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
                </div> {/* Close slider-wrapper */}
            </div>
        </>
    );
};

export default Banner2;