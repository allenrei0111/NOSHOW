import React, { useState, useEffect } from 'react';
import './Track.css';

const Track = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [miles, setMiles] = useState(0);
  const [estimatedTime, setEstimatedTime] = useState('');

  const generateTrackingNumber = () => {
    const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 8; i++) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    setTrackingNumber(result);
  };

  const simulateLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // Simulated data - miles and estimated time
      setMiles(Math.floor(Math.random() * 1000));
      const hours = Math.floor(Math.random() * 24);
      const minutes = Math.floor(Math.random() * 60);
      setEstimatedTime(`${hours} hours ${minutes} minutes`);
    }, 3000); // Simulate loading for 3 seconds
  };

  useEffect(() => {
    generateTrackingNumber();
  }, []);

  return (
    <div className="track-container">
      <h2>Track Your Order</h2>
      <div className="tracking-info">
        <p>Tracking Number: {trackingNumber}</p>
        {isLoading ? (
          <div className="loading-animation"></div>
        ) : (
          <div>
            <p>Miles: {miles}</p>
            <p>Estimated Time: {estimatedTime}</p>
          </div>
        )}
      </div>
      <button className="track-button" onClick={simulateLoading}>
        Track
      </button>
    </div>
  );
};

export default Track;
