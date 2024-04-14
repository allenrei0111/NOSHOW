import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import './AddToFavorites.css';

const AddToFavorites = ({ productId }) => {
  const { addToFavorites, removeFromFavorites, favorites, isFavorite } = useContext(ShopContext);

  const handleToggleFavorite = () => {
    if (isFavorite(productId)) {
      removeFromFavorites(productId);
    } else {
      addToFavorites(productId);
    }
  };

  return (
    <button
      className={`add-to-favorites ${isFavorite(productId) ? 'favorited' : ''}`}
      onClick={handleToggleFavorite}
    >
      {isFavorite(productId) ? 'Remove from Favorites' : 'Add to Favorites'}
    </button>
  );
};

export default AddToFavorites;
