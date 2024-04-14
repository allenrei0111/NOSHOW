import React, { useContext, useState } from "react";
import "./AddToFavourites.css";
import { ShopContext } from "../../Context/ShopContext";
import 'animate.css';

const AddToFavourite = () => {
  const { products, cartItems} = useContext(ShopContext);
  
  return (
    <div>
      <hr />
      {products.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format">
                <img className="cartitems-product-icon" src={e.image} alt="" />
                <p>{e.name}</p>
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


export default AddToFavourite;
