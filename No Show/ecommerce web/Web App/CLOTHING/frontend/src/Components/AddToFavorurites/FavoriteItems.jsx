import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import './favorite.css';

const FavoriteItems = () => {
  const { products, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className="favorite-items">
      <div className="favorite-items-main">
        <p>Products</p>
        <p>Title</p>
        <p>Remove</p>
      </div>
      <hr />
      {products.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="favorite-items-format">
                <img className="favorite-items-product-icon" src={e.image} alt="" />
                <p>{e.name}</p>
                <button className="favorite-items-remove" onClick={() => removeFromCart(e.id)}>X</button>
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
