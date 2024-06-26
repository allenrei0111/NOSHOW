import React, { useState, useEffect } from 'react';
import './Home.css';
import hero_image1 from '../Images/hero_image.png';
import hero_image2 from '../Images/hero_image2.png';
import hero_image3 from '../Images/hero_image3.png';
import {Link} from 'react-router-dom';
const Home = () => {
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
  }, []);

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
            <p class="promo-code animate__animated animate__heartBeat">'NOSHOW30'</p>
            <p>and save 30% off your next purchase.</p>
            <p>You might want to check out our Best Seller Clothes</p>
            <button className= "bestseller"onClick = {handleClosePopup}>
            <Link to='/hotlist' style ={{textDecoration:'none'}}>Best Seller</Link>
            </button>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </>
      )}


      <div className="hero-top">
      <h1 class="animate__animated animate__rubberBand"> Discover Your Style</h1>
    </div>
      <div className="hero-right ">
        <img src={images[slideIndex]} alt="" width={1000} />
      </div>
    </div>
  );
};

export default Home;
