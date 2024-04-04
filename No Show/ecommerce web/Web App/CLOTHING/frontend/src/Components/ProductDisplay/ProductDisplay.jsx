import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import star_icon from '../Images/star_icon.png';
import star_dull_icon from '../Images/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';
 
const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart, selectedSize, setSelectedSize } = useContext(ShopContext); // Using context
 
  const [addedToCart, setAddedToCart] = useState(false);
  const [selectedSizeMessage, setSelectedSizeMessage] = useState('');
 
  const handleSizeSelection = (size) => {
    setSelectedSize(size); // Set selected size in context
    setSelectedSizeMessage(`Size ${size} selected`);
    setAddedToCart(false); // Reset addedToCart state
  };
 
 
  const handleAddToCart = (productId) => {
    addToCart(productId);
    setAddedToCart(true);
    setSelectedSize(''); // Reset selected size
    setSelectedSizeMessage(''); // Reset selected size message
  };
 
  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
        <div className='productdisplay-img-list'>
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
        </div>
        <div className='productdisplay-img'>
          <img className='productdisplay-main-img' src={product.image} alt='' />
        </div>
      </div>
      <div className='productdisplay-right'>
        <h1>{product.name}</h1>
        <div className='productdisplay-right-stars'>
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_dull_icon} alt='' />
          <p>(122)</p>
        </div>
        <div className='productdisplay-right-prices'>
          <div className='productdisplay-right-price-old'>${product.old_price}</div>
          <div className='productdisplay-right-price-new'>${product.new_price}</div>
        </div>
 
        <div className='productdisplay-right-size'>
          <h1>Select Size</h1>
          <div className='productdisplay-right-sizes'>
            {/* For each size option, add an onClick handler to set the selected size */}
            <div className={selectedSize === 'S' ? 'selected-size' : ''} onClick={() => handleSizeSelection('S')}>S</div>
            <div className={selectedSize === 'M' ? 'selected-size' : ''} onClick={() => handleSizeSelection('M')}>M</div>
            <div className={selectedSize === 'L' ? 'selected-size' : ''} onClick={() => handleSizeSelection('L')}>L</div>
            <div className={selectedSize === 'XL' ? 'selected-size' : ''} onClick={() => handleSizeSelection('XL')}>XL</div>
            <div className={selectedSize === 'XXL' ? 'selected-size' : ''} onClick={() => handleSizeSelection('XXL')}>XXL</div>
          </div>
          <div className='selected-size-message'>{selectedSizeMessage}</div>
        </div>
        {/* Conditional rendering based on whether product is added to cart or not */}
        {addedToCart ? (
          <p>ADDED TO CART</p>
        ) : (
          <button onClick={() => handleAddToCart(product.id)}>ADD TO CART</button>
        )}
      </div>
    </div>
  );
};
 
export default ProductDisplay;