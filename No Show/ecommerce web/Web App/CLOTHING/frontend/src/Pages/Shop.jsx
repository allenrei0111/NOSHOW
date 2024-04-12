import React, { useEffect, useState } from 'react';
import Hero from '../Components/Home/Home';
import NewCollections from '../Components/NewCollections/NewCollections';
import NewsLetter from '../Components/NewsLetter/NewsLetter';
import Soon from '../Components/CommingSoon/Soon';
import "./CSS/Shop.css"; 

const Shop = () => {
  const [newcollection, setNewCollection] = useState([]);

  const fetchInfo = () => {
    fetch('http://localhost:4000/newcollections')
      .then((res) => res.json())
      .then((data) => setNewCollection(data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="shop-container"> 
      <div className="hero-container"> 
        <Hero />
      </div>
      <div className="new-collections-container"> 
        <NewCollections data={newcollection} />
      </div>
      <div className="soon-container"> 
        <Soon />
      </div>
      <div className="newsletter-container"> 
        <NewsLetter />
      </div>
    </div>
  );
};

export default Shop;
