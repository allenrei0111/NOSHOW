import React from 'react';
import soon_product from '../Images/soon';
import './Soon.css';

const Soon = () => {
  return (
    <div className="coming-soon">
      <h2>Coming Soon</h2>
      <div className="products">
        {soon_product.map(product => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Soon;
