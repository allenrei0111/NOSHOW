import React, { useState } from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
  
      if (response.ok) {
        setSubscribed(true);
        setError('');
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className='newsletter'>
      {subscribed ? (
        <div>
          <h2>Thank you for subscribing!</h2>
          <p>You'll receive our exclusive offers soon.</p>
        </div>
      ) : (
        <div>
          <h1>Get Exclusive Offers On Your Email</h1>
          <p>Subscribe to our newsletter and stay tuned.</p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder='Your email id'
              value={email}
              onChange={handleInputChange}
            />
            <button type="submit">Subscribe</button>
          </form>
          {error && <p className="error">{error}</p>}
        </div>
      )}
    </div>
  );
};

export default NewsLetter;