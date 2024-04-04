import React from 'react'
import './Sidebar.css'
import add_product_icon from '../Images/add.png'
import list_product_icon from '../Images/remove.png'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to='/addproduct' style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <img src={add_product_icon} alt="" width={60} />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to='/listproduct' style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <img src={list_product_icon} alt="" width={60}/>
          <p>Product List</p>
        </div>
      </Link>
      
    </div>
  )
}

export default Sidebar
