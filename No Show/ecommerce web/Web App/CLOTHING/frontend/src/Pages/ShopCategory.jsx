import React, { useEffect, useState } from "react";
import "./CSS/ShopCategory.css";
import Item from "../Components/Item/Item";


const ShopCategory = (props) => {
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc"); 

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => { 
    fetch('http://localhost:4000/allproducts') 
      .then((res) => res.json()) 
      .then((data) => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }

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

  const filteredProducts = props.category
    ? products.filter(product => product.category === props.category)
    : products;

  return (
    <div className="shopcategory">
      <img src={props.banner} className="shopcategory-banner" alt="" />
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
        {filteredProducts.map(item => (
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

export default ShopCategory;
