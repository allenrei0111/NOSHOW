import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import navlogo from '../Images/logo.png';

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem('auth-token');
    alert('LOGGED OUT SUCCESSFULLY!');
    window.location.replace("/"); // Redirect to the homepage after logout
  };

  return (
    <div className='navbar-login-logo'>
      <Link to="/home">
        <img src={navlogo} className='nav-logo' alt="Logo" />
      </Link>

      <ul className='nav-links'>
        {localStorage.getItem('auth-token') ? (
          <li>
            <button onClick={handleLogout} className="logout-button">Logout</button>
          </li>
        ) : (
          <li>
            <button className='login-button'><Link  to="/login">Admin Login</Link></button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
