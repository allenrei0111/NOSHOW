import React, { useContext, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png';
import cart_icon from '../Images/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';
import SearchBar from '../../SearchButton/SearchBar';
import Profiles from "../Profiles/Profiles";
import ppf from "../Images/ppf.png"; //https://www.istockphoto.com/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-gm1495088043-518213332


const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [theme, setTheme] = useState('light'); 
  const { getTotalCartItems, products } = useContext(ShopContext);
  const handleSearch = searchResults => {};
  const [openProfile, setOpenProfile] = useState(false);

  const handleToggleMenu = () => {
    setMenuVisible(prevMenuVisible => !prevMenuVisible);
  };

  const handleToggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light')); 
    document.body.classList.toggle('light'); 
    document.body.classList.toggle('dark'); 
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
        {/* Light mode checkbox */}
        <input
          type="checkbox"
          className="theme-checkbox"
          checked={theme === 'dark'}
          onChange={handleToggleTheme}
        />
        <button class="btn" onClick={handleToggleMenu}>
    <span class="icon">
        <svg viewBox="0 0 175 80" width="40" height="40">
            <rect width="80" height="15" fill="#f0f0f0" rx="10"></rect>
            <rect y="30" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
            <rect y="60" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
        </svg>
    </span>
    <span class="text">MENU</span>
</button>
        <Link to='/' style={{ textDecoration: 'none' }} className="nav-logo">
          <img src={logo} alt="logo" width={300} />
        </Link>
      </div>
      <div className="nav-search">
        <SearchBar products={products} handleSearch={handleSearch}/>
      </div>

        <div>
        <Link to="/cart" className="nav-cart-link">
          <img src={cart_icon} alt="cart" width={50} className='nav-cart'/>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </Link>

        <div className="nav-profile-container">
  <img src={ppf} alt="ppf" width={50} onClick={() => setOpenProfile(prev => !prev)}/>
  {openProfile && <Profiles/>}
</div>



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
        {localStorage.getItem('auth-token') && (
          <li onClick={() => setMenuVisible(false)}>
            <Link to="/profile" style={{ textDecoration: 'none' }}>Profile</Link>
          </li>
        )}  
      </ul>
    </div>
  );
}

export default Navbar;
