import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import star_icon from '../Images/star_icon.png';
import star_dull_icon from '../Images/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = ({ product }) => {
  const { addToCart, selectedSize, setSelectedSize } = useContext(ShopContext);

  const [addedToCart, setAddedToCart] = useState(false);
  const [selectedSizeMessage, setSelectedSizeMessage] = useState('');
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const reviews = [
    { text: "Great product, loved it!", rating: 5, name: "John Doe" },
    { text: "Nice quality, fast delivery.", rating: 4, name: "Jane Smith" },
    { text: "Average product, could be better.", rating: 3, name: "Mike Johnson" },
    { text: "Not satisfied, poor quality.", rating: 2, name: "Emily Brown" },
    { text: "Terrible experience, would not recommend.", rating: 1, name: "David Wilson" },
    { text: "Fantastic item, exceeded my expectations!", rating: 5, name: "Sarah Miller" },
    { text: "Impressive quality, worth every penny.", rating: 4, name: "Chris Evans" },
    { text: "Decent product, but delivery was slow.", rating: 3, name: "Olivia Taylor" },
    { text: "Disappointing purchase, not as described.", rating: 2, name: "Daniel Clark" },
    { text: "Awful experience, will never buy again.", rating: 1, name: "Sophia Martinez" },
    { text: "Excellent service, highly recommended!", rating: 5, name: "Michael White" },
    { text: "Good value for money, very satisfied.", rating: 4, name: "Jessica Brown" },
    { text: "Okay product, nothing extraordinary.", rating: 3, name: "William Davis" },
    { text: "Poor customer support, disappointed.", rating: 2, name: "Ava Garcia" },
    { text: "Horrible quality, waste of money.", rating: 1, name: "Matthew Wilson" },
  
  ];
  

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
    setSelectedSizeMessage(`Size ${size} selected`);
    setAddedToCart(false);
  };

  const handleAddToCart = (productId) => {
    addToCart(productId);
    setAddedToCart(true);
    setSelectedSize('');
    setSelectedSizeMessage('');
  };

  const handleNextReview = () => {
    setCurrentReviewIndex((currentReviewIndex + 1) % reviews.length);
  };

  const handlePrevReview = () => {
    setCurrentReviewIndex((currentReviewIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
        <div className='productdisplay-img-list'>
          {Array.from({ length: 4 }).map((_, index) => (
            <img key={index} src={product.image} alt='' />
          ))}
        </div>
        <div className='productdisplay-img'>
          <img className='productdisplay-main-img' src={product.image} alt='' />
        </div>
      </div>
      <div className='productdisplay-right'>
        <h1>{product.name}</h1>
        <div className='productdisplay-right-stars'>
          {[...Array(5)].map((_, index) => (
            <img key={index} src={index < product.rating ? star_icon : star_dull_icon} alt='' />
          ))}
          <p>({product.reviews})</p>
        </div>
        <div className='productdisplay-right-prices'>
          <div className='productdisplay-right-price-old'>${product.old_price}</div>
          <div className='productdisplay-right-price-new'>${product.new_price}</div>
        </div>

        <div className='productdisplay-right-size'>
          <h1>Select Size</h1>
          <div className='productdisplay-right-sizes'>
            {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
              <div
                key={size}
                className={selectedSize === size ? 'selected-size' : ''}
                onClick={() => handleSizeSelection(size)}
              >
                {size}
              </div>
            ))}
          </div>
          <div className='selected-size-message'>{selectedSizeMessage}</div>
        </div>

        <div className='productdisplay-right-reviews'>
          <h2>Customer Reviews</h2>
          <div className='review'>
            <p>{reviews[currentReviewIndex].text}</p>
            <div className='rating'>
              {[...Array(reviews[currentReviewIndex].rating)].map((_, index) => (
                <img key={index} src={star_icon} alt='star' />
              ))}
              {[...Array(5 - reviews[currentReviewIndex].rating)].map((_, index) => (
                <img key={index} src={star_dull_icon} alt='dull star' />
              ))}
            </div>
            <p className="customer-name">- {reviews[currentReviewIndex].name}</p>
          </div>
          <div className='review-navigation'>
            <button onClick={handlePrevReview}>&lt;</button>
            <button onClick={handleNextReview}>&gt;</button>
          </div>
        </div>

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
