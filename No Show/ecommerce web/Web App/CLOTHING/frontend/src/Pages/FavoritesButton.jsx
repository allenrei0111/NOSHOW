import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import { ShopContext } from '../../Context/ShopContext';
import heart_icon from '../Images/heart_icon.png';

const FavoritesButton = () => {
  const { favorites } = useContext(ShopContext);

  return (
    <div className="favorites-button">
      <Link to="/favorites">
        <img src={heart_icon} alt="Favorites" />
        <span className="favorites-count">{favorites.length}</span>
      </Link>
      {/* Display saved items */}
      {favorites.length > 0 && (
        <div className="favorites-dropdown">
          <ul>
            {favorites.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FavoritesButton;
