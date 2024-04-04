import React, { useEffect, useState } from 'react';
import Hero from '../Components/Home/Hero';
import Popular from '../Components/Popular/Popular';
import NewCollections from '../Components/NewCollections/NewCollections';
import NewsLetter from '../Components/NewsLetter/NewsLetter';
import Soon from '../Components/CommingSoon/Soon';
import "./CSS/Shop.css"; 

const Shop = () => {
  const [popular, setPopular] = useState([]);
  const [newcollection, setNewCollection] = useState([]);

  const fetchInfo = () => {
    fetch('http://localhost:4000/popularinallcategories')
      .then((res) => res.json())
      .then((data) => setPopular(data));
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
      <div className="popular-container">
        <Popular data={popular} />
      </div>
      <div className="soon-container"> 
        <Soon />
      </div>
      <div className="new-collections-container"> 
        <NewCollections data={newcollection} />
      </div>
      <div className="newsletter-container"> 
        <NewsLetter />
      </div>
    </div>
  );
};

export default Shop;
