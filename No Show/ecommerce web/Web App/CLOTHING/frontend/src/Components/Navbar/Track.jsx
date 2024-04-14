import React, { useState } from 'react';
import './Track.css';

const Track = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [miles, setMiles] = useState(0);
  const [estimatedTime, setEstimatedTime] = useState('');
  const [searched, setSearched] = useState(false);

  const fetchTrackingInfo = () => {
    // Simulate loading
    setIsLoading(true);
    setTimeout(() => {
      // Simulated data - miles and estimated time
      const milesResult = Math.floor(Math.random() * 1000);
      const hours = Math.floor(Math.random() * 24);
      const minutes = Math.floor(Math.random() * 60);
      const estimatedTimeResult = `${hours} hours ${minutes} minutes`;

      // Update state with fetched data
      setMiles(milesResult);
      setEstimatedTime(estimatedTimeResult);
      setIsLoading(false);
      setSearched(true); // Update searched state after loading is complete
    }, 3000); // Simulate loading for 3 seconds
  };

  const handleSearch = () => {
    if (!searched) {
      fetchTrackingInfo();
    }
  };

  const handleTrackAnotherOrder = () => {
    // Reset all states and enable search functionality
    setTrackingNumber('');
    setIsLoading(false);
    setMiles(0);
    setEstimatedTime('');
    setSearched(false);
  };

  return (
    <div className="track-container">
      <h2>Track Your Order</h2>
      <div className="tracking-input">
        <input
          type="text"
          placeholder="Enter Tracking Number"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          disabled={searched}
        />
        <button onClick={handleSearch} disabled={searched}>
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </div>
      {isLoading && <div className="loading-animation"></div>}
      {!isLoading && miles !== 0 && searched && (
        <div className="tracking-info">
          <p>Tracking Number: {trackingNumber}</p>
          <p>Miles: {miles}</p>
          <p>Estimated Time: {estimatedTime}</p>
        </div>
      )}
      {searched && (
        <button onClick={handleTrackAnotherOrder}>Track Another Order</button>
      )}
    </div>
  );
};

export default Track;
