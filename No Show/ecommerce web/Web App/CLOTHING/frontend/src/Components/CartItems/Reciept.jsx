import React from "react";

const Receipt = () => {
  // Function to generate a random receipt code
  const generateReceiptCode = () => {
    return Math.random().toString(36).substring(7).toUpperCase(); // Generate a random alphanumeric string
  };

  return (
    <div>
      <h1>Receipt</h1>
      <p>Receipt Code: {generateReceiptCode()}</p>
      {/* Other receipt details */}
    </div>
  );
};

export default Receipt;
