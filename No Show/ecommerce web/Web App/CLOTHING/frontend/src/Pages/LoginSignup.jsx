import React, { useState } from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [showTerms, setShowTerms] = useState(false);


  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    let dataObj;
    await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => { dataObj = data; });

    if (dataObj.success) {
      localStorage.setItem('auth-token', dataObj.token);
      window.location.replace("/");
    } else {
      alert(dataObj.errors);
    }
  };

  const signup = async () => {
    let dataObj;
    await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => { dataObj = data; });

    if (dataObj.success) {
      alert('Thanks for signing up!');
      localStorage.setItem('auth-token', dataObj.token);
      window.location.replace("/");
    } else {
      alert('Account already registered.');
    }
  };

  
  if (localStorage.getItem('auth-token')) {
    alert('You are already logged in.');
    window.location.replace("/");
  }

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" ? <input type="text" placeholder="Your name" name="username" value={formData.username} onChange={changeHandler} /> : <></>}
          <input type="email" placeholder="Email address" name="email" value={formData.email} onChange={changeHandler} />
          <input type="password" placeholder="Password" name="password" value={formData.password} onChange={changeHandler} />
        </div>

        <button onClick={() => { state === "Login" ? login() : signup() }}>Continue</button>

        {state === "Login" ?
          <p className="loginsignup-login">Create an account? <span onClick={() => { setState("Sign Up") }}>Click here</span></p>
          :
          <p className="loginsignup-login">Already have an account? <span onClick={() => { setState("Login") }}>Login here</span></p>}

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
    <p>Welcome to Lander Styles, operated by students of the Southern Alberta Institute of Technology (SAIT). By accessing or using our website, you agree to comply with and be bound by the following terms and conditions of use. Please read these terms carefully before using our website.</p>
    
    <ul>
        <li>
            <strong>Website Use:</strong> The content of the pages of this website is for your general information and use only. It is subject to change without notice.
        </li>
        <li>
            <strong>Product Information:</strong> We strive to provide accurate descriptions and images of our products. However, we do not guarantee the accuracy, completeness, or reliability of any product information.
        </li>
        <li>
            <strong>Pricing:</strong> All prices are subject to change without notice. We reserve the right to modify or discontinue any product without prior notice.
        </li>
        <li>
            <strong>Ordering:</strong> Orders placed through our website are subject to availability and acceptance. We reserve the right to refuse or cancel any order for any reason at any time.
        </li>
        <li>
            <strong>Shipping:</strong> Shipping costs and delivery times are provided for estimation purposes only. Actual shipping costs and delivery times may vary.
        </li>
        <li>
            <strong>Returns and Exchanges:</strong> We accept returns and exchanges within [number] days of purchase. Items must be unused and in their original condition. Return shipping costs are the responsibility of the customer.
        </li>
        <li>
            <strong>Intellectual Property:</strong> All content included on this website, such as text, graphics, logos, images, and software, is the property of Lander Styles or its content suppliers and is protected by copyright laws.
        </li>
        <li>
            <strong>Privacy:</strong> We respect your privacy and are committed to protecting your personal information. Please review our Privacy Policy for details on how we collect, use, and disclose your information.
        </li>
        <li>
            <strong>Governing Law:</strong> These terms and conditions are governed by and construed in accordance with the laws of the Province of Alberta, Canada. Any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of the Province of Alberta.
        </li>
        <li>
            <strong>Contact Information:</strong> If you have any questions about these terms and conditions, please contact us at <a href="mailto:LanderStylez@gmail.com">LanderStylez@gmail.com</a>.
        </li>
    </ul>

    <p>By using our website, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions.</p>

          </div>
        </div>
      )}
    </div>
  );
};

export default LoginSignup;
