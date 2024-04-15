import React, { useContext, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";
import './favorite.css';

const FavoriteItems = () => {
  const { products, removeFromCart } = useContext(ShopContext);
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (productId) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter(id => id !== productId));
    } else {
      setFavorites([...favorites, productId]);
    }
  };
  return (
  
    <div className="favorite-items">
      <h2> Favorites</h2>

      <div className="favorite-items-main">
        <p>Products</p>
        <p>Title</p>
        <p>Remove</p>
      </div>
      <hr />
      {products.map((e) => {
        if (favorites.includes(e.id)) {
          return (
            <div key={e.id}>
              <div className="favorite-items-format">
                <img className="favorite-items-product-icon" src={e.image} alt="" />
                <p>{e.name}</p>
                <button className="favorite-items-remove" onClick={() => toggleFavorite(e.id)}>Remove</button>
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default FavoriteItems;
