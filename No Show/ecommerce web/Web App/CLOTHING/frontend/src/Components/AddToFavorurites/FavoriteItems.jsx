import React from 'react';

const FavoriteItems = ({ products, favoriteItems, removeFromFavorite, selectedSize }) => {
  return (
    <div className="favoriteitems">
      <div className="favoriteitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Sizes</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {products.map((e) => {
        if (favoriteItems && favoriteItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="favoriteitems-format">
                <img className="favoriteitems-product-icon" src={e.image} alt="" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <p>{selectedSize}</p>
                {/* Render the quantity button only if selectedSize is defined */}
                {selectedSize && <button className="favoriteitems-quantity">{favoriteItems[e.id]}</button>}
                <p>${e.new_price * favoriteItems[e.id]}</p>
                <button className="favoriteitems-remove" onClick={() => removeFromFavorite(e.id)}>X</button>
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
