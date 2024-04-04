import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../Images/logo.png'
import cart_icon from '../Images/cart_icon.png'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Images/nav_dropdown.png'

const Navbar = () => {

  let [menu,setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);

  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  const handleLogout = () => {
    localStorage.removeItem('auth-token');
    // Show alert for successful logout
    alert('Successfully logged out');
    // Redirect to homepage
    window.location.replace("/");
  }

  return (
    <div className='nav'>
      <Link to='/' style={{ textDecoration: 'none' }} className="nav-logo">
        <img src={logo} alt="logo" width={300} />
        
      </Link>
      <img onClick={dropdown_toggle} className='nav-dropdown' src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={()=>{setMenu("home")}}><Link to='/' style={{ textDecoration: 'none' }}>Home</Link>{menu==="home"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link to='/mens' style={{ textDecoration: 'none' }}>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link to='/womens' style={{ textDecoration: 'none' }}>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link to='/kids' style={{ textDecoration: 'none' }}>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
        ?<button onClick={handleLogout}>Logout</button>
        :<Link to='/login' style={{ textDecoration: 'none' }}><button>Login</button></Link>}
        <Link to="/cart"><img src={cart_icon} alt="cart" width={50}/></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
