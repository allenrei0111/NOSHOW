import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import footer_logo from '../Images/logo_big.png';
import instagram_icon from '../Images/instagram_icon.png';
import twitter_icon from '../Images/twitter_icon.png';
import facebook_icon from '../Images/facebook_icon.png';
 
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" width={350} />
      </div>
      <ul className="footer-links">
       <li><Link to="/Question">Questions</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/guide">Guide</Link></li>
        <li><Link to="/terms-of-service">Terms of Service</Link></li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="" width={50} />
        </div>
        <div className="footer-icons-container">
          <img src={twitter_icon} alt="" width={40} />
          
        </div>
        <div className="footer-icons-container">
          <img src={facebook_icon} alt="" width={50} />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Students From SAIT</p>
      </div>
    </div>
  );
};
 
export default Footer;