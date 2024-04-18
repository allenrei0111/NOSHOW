import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import './Reciept.css'; 

function Receipt() {
  const { getTotalCartItems, getTotalCartAmount } = useContext(ShopContext);
  const [generatedCode, setGeneratedCode] = useState('');
  const [todaysDate, setTodaysDate] = useState('');

  const generateRandomCode = () => {
    // Generate a random code (assuming it's alphanumeric)
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 8; // You can adjust the length of the code as needed
    let code = '';
    for (let i = 0; i < length; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
  };

  useEffect(() => {
    const code = generateRandomCode();
    const today = new Date().toLocaleDateString();
    // Save the generated code and today's date
    setGeneratedCode(code);
    setTodaysDate(today);
  }, []);

  return (
    <div className="receipt-container">
      <div className="receipt-header">
        <h2 className="receipt-title">Receipt</h2>
        <p className="receipt-code">Code: {generatedCode}</p>
        <p className="receipt-date">Date: {todaysDate}</p>
      </div>
      <div className="receipt-items">
        <p className="receipt-item">Items Purchased: {getTotalCartItems()}</p>
        <p className="receipt-amount">Total Amount: ${getTotalCartAmount()}</p>
      </div>
      <p className="thank-you-message">Thank you for your purchase!</p>
    </div>
  );
}

export default Receipt;
