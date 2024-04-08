import React, { useState, useEffect } from 'react';
import './Home.css';
import hero_image1 from '../Images/hero_image.png';
import hero_image2 from '../Images/hero_image2.png';
import hero_image3 from '../Images/hero_image3.png';

const Hero = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const images = [hero_image1, hero_image2, hero_image3]; // Array of image paths

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000); // Wait for 4 seconds before showing the popup

    // Set interval for changing slide every 5 seconds
    const slideInterval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearTimeout(timer); // Cleanup the timer on component unmount
      clearInterval(slideInterval); // Cleanup the slide interval on component unmount
    };
  }, []); // Empty dependency array ensures this effect runs only once

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className='hero'>
      {showPopup && (
        <>
          <div className="overlay"></div>
          <div className="popup">
            <p>Exclusive offer! Use Code </p>
            <p class="animate__animated animate__heartBeat">'LANDERSTYLEZ'</p>
            <p>and save 30% off your next purchase.</p>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </>
      )}
      <div className="hero-left">
        <h1>Fresh and trending collections</h1>
        <div>
          <div>
            <p class="animate__animated animate__bounceInDown"> designed</p>
          </div>
          <p class="animate__animated animate__bounceInLeft"> for </p>
          <p class="animate__animated animate__bounceInRight"> everyone.</p>
        </div>
      </div>
      <div className="hero-right">
        <img src={images[slideIndex]} alt="" width={1000} />
      </div>
    </div>
  );
};

export default Hero;
