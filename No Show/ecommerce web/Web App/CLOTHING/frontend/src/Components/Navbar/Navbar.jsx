import React, { useContext, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png';
import cart_icon from '../Images/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';
import SearchBar from '../../SearchButton/SearchBar';

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [theme, setTheme] = useState('light'); // State for theme mode
  const { getTotalCartItems, products } = useContext(ShopContext);
  const handleSearch = searchResults => {};

  const handleToggleMenu = () => {
    setMenuVisible(prevMenuVisible => !prevMenuVisible);
  };

  const handleToggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light')); // Toggle theme mode
    document.body.classList.toggle('light'); // Toggle light theme class on body
    document.body.classList.toggle('dark'); // Toggle dark theme class on body
  };

  const handleLogout = () => {
    localStorage.removeItem('auth-token');
    alert('Successfully logged out');
    // Redirect to homepage
    window.location.replace("/");
  };

  return (
    <div className='nav'>
      <div className="nav-left">
        <button className="hamburger-icon" onClick={handleToggleMenu}>
          ☰
          {/* Light mode and night mode options */}
          <span className="theme-toggle" onClick={handleToggleTheme}>
            {theme === 'light' ? '🌞' : '🌜'}
          </span>
        </button>
        <Link to='/' style={{ textDecoration: 'none' }} className="nav-logo">
          <img src={logo} alt="logo" width={300} />
        </Link>
      </div>
      <div className="nav-search">
        <SearchBar products={products} handleSearch={handleSearch}/>
      </div>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
          ? <button onClick={handleLogout} className='nav-logout'>Logout</button>
          : <Link to='/login' style={{ textDecoration: 'none' }}><button className='nav-login'>Login</button></Link>}
        <Link to="/cart" className="nav-cart-link">
          <img src={cart_icon} alt="cart" width={50} className='nav-cart'/>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </Link>
      </div>

      <ul className={`nav-menu ${menuVisible ? 'visible' : ''}`}>
        <li onClick={() => setMenuVisible(false)}>
          <Link to='/' style={{ textDecoration: 'none' }}>Home</Link>
        </li>
        <li onClick={() => setMenuVisible(false)}>
          <Link to='/mens' style={{ textDecoration: 'none' }}>Men</Link>
        </li>
        <li onClick={() => setMenuVisible(false)}>
          <Link to='/womens' style={{ textDecoration: 'none' }}>Women</Link>
        </li>
        <li onClick={() => setMenuVisible(false)}>
          <Link to='/kids' style={{ textDecoration: 'none' }}>Kids</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;
