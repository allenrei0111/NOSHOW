
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CartItems from '../Components/CartItems/CartItems';
import { Navigate } from 'react-router-dom'; // Import Navigate
import LoginNotification from '../Pages/LoginNotification'; // Import LoginNotification component

// Load your Stripe publishable key
const stripePromise = loadStripe('pk_test_51OvSq1HjQsfCN3ihPmxsbkss0yEvWXDK0JSx6w9okn38UmB5l0OdRUWopK2KhigoBqGWy7w94HXiybMj6ywC3GI300Cl3WNXk7');

const Cart = () => {
  // Check if user is authenticated
  const isAuthenticated = localStorage.getItem('auth-token') ? true : false;

  // If not authenticated, return the login notification
  if (!isAuthenticated) {
    return <LoginNotification isAuthenticated={isAuthenticated} />;
  }

  return (
    <div>
      {/* Wrap your CartItems component with Elements */}
      <Elements stripe={stripePromise}>
        <CartItems />
      </Elements>
    </div>
  );
};
export default Cart;