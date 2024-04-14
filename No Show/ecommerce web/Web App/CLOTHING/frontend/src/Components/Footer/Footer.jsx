import React, { useState } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import logoBig from '../Images/logo_big.png';
import instagramIcon from '../Images/instagram_icon.png';
import twitterIcon from '../Images/twitter_icon.png';
import facebookIcon from '../Images/facebook_icon.png';

const Footer = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <footer className='footer'>
      <div className="footer-logo">
        <img src={logoBig} alt="Logo" width={350} />
      </div>
      <ul className="footer-links">
        <li><Link to="/question" className={activeLink === 0 ? 'active' : ''} onClick={() => handleLinkClick(0)}>FAQ</Link></li>
        <li><Link to="/about" className={activeLink === 1 ? 'active' : ''} onClick={() => handleLinkClick(1)}>About</Link></li>
        <li><Link to="/contact" className={activeLink === 2 ? 'active' : ''} onClick={() => handleLinkClick(2)}>Contact</Link></li>
        <li><Link to="/terms" className={activeLink === 3 ? 'active' : ''} onClick={() => handleLinkClick(3)}>Terms</Link></li>
        <li><Link to="/privacy" className={activeLink === 4 ? 'active' : ''} onClick={() => handleLinkClick(4)}>Privacy</Link></li>
      </ul>
      <div className="footer-social-icon">
        <img src={instagramIcon} alt="Instagram" width={50} />
        <img src={twitterIcon} alt="Twitter" width={40} />
        <img src={facebookIcon} alt="Facebook" width={50} />
      </div>
      <hr />
      <p>&copy; {new Date().getFullYear()} TEAM NO SHOW. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
