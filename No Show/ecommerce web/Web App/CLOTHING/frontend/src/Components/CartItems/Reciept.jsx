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
      <p className="thank-you-message">Thank you for purchasing!</p>
      <p className="receipt-details">Receipt: {generatedCode}</p>
      <p className="receipt-details">Purchased Date: {todaysDate}</p>
      
      <p className="receipt-details">Item Purchased: {getTotalCartItems()}</p>
      <p className="receipt-details">Total Amount: ${getTotalCartAmount()}</p>
    </div>
  );
}

export default Receipt;
