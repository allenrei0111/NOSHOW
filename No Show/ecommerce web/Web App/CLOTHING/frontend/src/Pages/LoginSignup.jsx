import React, { useState } from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

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
        alert("Logged in successfully, Welcome Shoppers!");
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

  const signup = async () => {
    try {
      const response = await fetch('http://localhost:4000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (data.success) {
        alert('Thanks for signing up!');
        localStorage.setItem('auth-token', data.token);
        window.location.replace("/");
      } else {
        alert('Account already registered.');
      }
    } catch (error) {
      console.error('Signup failed:', error);
      alert('Signup failed. Please try again.');
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" && <input type="text" placeholder="Your name" name="username" value={formData.username} onChange={changeHandler} />}
          <input type="email" placeholder="Email address" name="email" value={formData.email} onChange={changeHandler} />
          <input type="password" placeholder="Password" name="password" value={formData.password} onChange={changeHandler} />
        </div>

        <button onClick={() => { state === "Login" ? login() : signup() }} disabled={isLoading}>{isLoading ? "Loading..." : "Continue"}</button>

        {state === "Login" ?
          <p className="loginsignup-login">Create an account? <span onClick={() => setState("Sign Up")}>Click here</span></p>
          :
          <p className="loginsignup-login">Already have an account? <span onClick={() => setState("Login")}>Login here</span></p>}

        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p onClick={() => setShowTerms(true)}>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>

      {showTerms && (
        <div className="terms-modal">
          <div className="terms-modal-content">
            <span className="close" onClick={() => setShowTerms(false)}>×</span>
            <h1>Terms and Conditions</h1>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginSignup;
