import React, { useContext } from "react";
import { ShopContext } from '../../Context/ShopContext';
import FavoriteItems from './FavoriteItems';

const AddToFavourite = () => {
  const { products, favoriteItems, removeFromFavorite, getTotalCartAmount, selectedSize } = useContext(ShopContext);

  return (
    <div>
      <FavoriteItems
        products={products}
        favoriteItems={favoriteItems}
        removeFromFavorite={removeFromFavorite}
        selectedSize={selectedSize}
      />
    </div>
  );
};

export default AddToFavourite;
