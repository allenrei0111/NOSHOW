import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import data_product from "../Images/data";

const HotList = () => {
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc"); 

  useEffect(() => {
    setProducts(data_product);
  }, []);

  const sortProductsByPrice = (order) => {
    const sortedProducts = [...products].sort((a, b) => {
      return order === "asc" ? a.new_price - b.new_price : b.new_price - a.new_price;
    });
    setProducts(sortedProducts);
  };

  const handleSortChange = (e) => {
    const order = e.target.value;
    setSortOrder(order);
    sortProductsByPrice(order);
  };

  return (
    <div className="shopcategory">
      
      <div className="shopcategory-indexSort">
        <div className="shopcategory-sort">
          Sort by{" "}
          <select value={sortOrder} onChange={handleSortChange} className="shopcategory-sort-list">
            <option value="asc">Price: Lowest First</option>
            <option value="desc">Price: Highest First</option>
          </select>
        </div>
      </div>
      <div className="shopcategory-products">
        {products.map(item => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default HotList;
