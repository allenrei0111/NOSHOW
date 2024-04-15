import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import the emailjs library
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
        // Send email using EmailJS
        const templateParams = {
          to_email: email,
        };
        
        // Replace with your EmailJS service ID and template ID
        emailjs.send('service_r9qs95o', 'template_e1dqmbs', templateParams, 'Jn69mmQROeuudPyZ5')
          .then(() => {
            console.log('Email sent successfully!');
          })
          .catch((err) => {
            console.error('Failed to send email:', err);
          });
        
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
          <p>Subscribe to our newsletter and stay updated.</p>
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
