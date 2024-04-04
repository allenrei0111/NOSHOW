import React from 'react';
import { Link, Navigate } from 'react-router-dom'; // Import Link and Navigate from React Router
import './Home.css';

const Home = () => {
  const isAuthenticated = localStorage.getItem('auth-token') ? true : false;

  // Function to render buttons if user is authenticated
  const renderButtons = () => {
    if (isAuthenticated) {
      return (
        <div className="button-container">
          <Link to="/addproduct" className="action-button add-button">Add Product</Link>
          <Link to="/listproduct" className="action-button remove-button">List Products</Link>
        </div>
      );
    } else {
      return (
        <p className="message">Please <Link to="/login">login</Link> to access the Admin Panel.</p>
      );
    }
  };

  return (
    <div className="home-container">
      <h1 className="title">Welcome to the Admin Panel!</h1>
      <div className="content">
        <p className="subtitle">Where Creativity Meets Control</p>
        <p className="description">This is your dashboard where you have the power to manage items. Add new products or remove existing ones effortlessly.</p>
        {renderButtons()}
      </div>
    </div>
  );
};

export default Home;
