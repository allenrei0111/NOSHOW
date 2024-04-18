import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import star_icon from '../Images/star_icon.png';
import star_dull_icon from '../Images/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = ({ product }) => {
  const { addToCart, selectedSize, setSelectedSize, addToFavorite } = useContext(ShopContext);

  const [addedToFavorite, setAddedToFavorite] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [selectedSizeMessage, setSelectedSizeMessage] = useState('');
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [favoriteIndicatorVisible, setFavoriteIndicatorVisible] = useState(false); // Add state for favorite indicator

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

  // Check if the product object exists and has the image property before accessing it
  if (!product || !product.image) {
    return null; // Render nothing if product or image is not available
  }

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

  const handleAddToFavorite = (productId) => {
    addToFavorite(productId);
    setAddedToFavorite(true);
    setFavoriteIndicatorVisible(true); // Show the favorite indicator when the favorite button is clicked
    setTimeout(() => setFavoriteIndicatorVisible(false), 2000); // Hide the indicator after 2 seconds
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
          {favoriteIndicatorVisible && <div className="favorite-indicator visible">Favorite</div>} {/* Add favorite indicator */}
        </div>
      </div>
      <div className='productdisplay-right'>
        <h1>{product.name}</h1>
        <div className='productdisplay-right-stars'>
          {[...Array(5)].map((_, index) => (
            <img key={index} src={index < product.rating ? star_icon : star_dull_icon} alt='' />
          ))}
          <p>({product.reviews}122)</p>
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

       
        <button className="add-to-cart-button" onClick={() => handleAddToCart(product.id)}>ADD TO CART</button>

       
        <button className="favorite-button" onClick={() => handleAddToFavorite(product.id)}>
          <svg className={`empty ${addedToFavorite ? 'hidden' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
            <path fill="none" d="M0 0H24V24H0z"></path>
            <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2zm-3.566 15.604c.881-.556 1.676-1.109 2.42-1.701C18.335 14.533 20 11.943 20 9c0-2.36-1.537-4-3.5-4-1.076 0-2.24.57-3.086 1.414L12 7.828l-1.414-1.414C9.74 5.57 8.576 5 7.5 5 5.56 5 4 6.656 4 9c0 2.944 1.666 5.533 4.645 7.903.745.592 1.54 1.145 2.421 1.7.299.189.595.37.934.572.339-.202.635-.383.934-.571z"></path>
          </svg>
          <svg className={`filled ${addedToFavorite ? '' : 'hidden'}`} height="32" width="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H24V24H0z" fill="none"></path>
            <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"></path>
          </svg>
          Add To Favorite 
        </button>

      </div>
    </div>
  );
};

export default ProductDisplay;
