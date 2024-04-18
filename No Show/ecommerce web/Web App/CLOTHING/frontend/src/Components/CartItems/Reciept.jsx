import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import "./Receipt.css";
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

  const handleGenerateCode = () => {
    const code = generateRandomCode();
    const today = new Date().toLocaleDateString();
    // Save the generated code and today's date
    setGeneratedCode(code);
    setTodaysDate(today);
  };

  useEffect(() => {
    handleGenerateCode(); // Automatically generate code and date when component mounts
  }, []);

  return (
    <div>
      <button onClick={handleGenerateCode}>Generate Receipt</button>
      <p>Generated Code: {generatedCode}</p>
      <p>Today's Date: {todaysDate}</p>
      
      <p>Item Purchased: {getTotalCartItems()}</p>
      <p>Total Amount: ${getTotalCartAmount()}</p>
    </div>
  );
}

export default Receipt;
