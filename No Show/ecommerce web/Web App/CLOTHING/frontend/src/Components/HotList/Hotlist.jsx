import React, { useState, useEffect } from 'react';

const HotList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetch('http://localhost:4000/data') // Assuming your backend is running on localhost:4000
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  };

  return (
    <div>
      <h2>Hot List</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>New Price: ${product.new_price}</p>
            <p>Old Price: ${product.old_price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotList;