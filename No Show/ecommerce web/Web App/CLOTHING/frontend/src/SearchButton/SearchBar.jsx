import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './SearchBar.css';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ products, handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = event => {
    const query = event.target.value;
    setSearchQuery(query);
    if (query.trim()) {
      const results = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
      // Check if handleSearch is a function before calling it
      if (typeof handleSearch === 'function') {
        handleSearch(results);
      }
      setErrorMessage('');
    } else {
      resetSearch();
    }
  };

  const resetSearch = () => {
    setSearchResults([]);
    setSearchQuery('');
    setErrorMessage('');
  };

  return (
    <div className="search-container">
      <div className="search-box">
        <input
          type="text"
          className="search-input"
          placeholder="Search products"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <FaSearch className="search-icon" />
      </div>
      <div className="search-results-container">
        {searchResults.length > 0 && (
          <ul className="search-results">
            {searchResults.map(product => (
              <li key={product.id}>
                <Link
                  to={`/product/${product.id}`}
                  className="search-result-link"
                  onClick={resetSearch} // Reset search results when clicked
                >
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default SearchBar;
