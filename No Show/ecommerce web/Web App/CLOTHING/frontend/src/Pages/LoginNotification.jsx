import React from 'react';
import { Link } from 'react-router-dom';
import "./CSS/LoginNotification.css";

const LoginNotification = ({ isAuthenticated }) => {
  // If the user is authenticated, don't show the notification
  if (isAuthenticated) {
    return null;
  }

  return (
    <div className="overlay"> {/* Apply overlay class here */}
      <div className="login-notification">
        <p>You need to login first to access this feature.</p>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default LoginNotification;

