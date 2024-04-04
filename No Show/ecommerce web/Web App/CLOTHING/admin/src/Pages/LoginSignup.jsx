import React, { useState } from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (data.success) {
        localStorage.setItem('auth-token', data.token);
        // Show success pop-up
        alert("Logged in successfully! WELCOME ADMINS!");
        window.location.replace("/");
      } else {
        alert(data.errors);
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCheckboxChange = (e) => {
    setAgreeTerms(e.target.checked);
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Admin Only</h1>
        <div className="loginsignup-fields">
          <input type="email" placeholder="Email address" name="email" value={formData.email} onChange={changeHandler} />
          <input type="password" placeholder="Password" name="password" value={formData.password} onChange={changeHandler} />
        </div>

        <button onClick={login} disabled={isLoading || !agreeTerms}>{isLoading ? 'Loading...' : 'Continue'}</button>

        <div className="loginsignup-agree">
          <input type="checkbox" name="agreeTerms" id="agreeTerms" checked={agreeTerms} onChange={handleCheckboxChange} />
          <label htmlFor="agreeTerms">Check the box to verified.</label>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
