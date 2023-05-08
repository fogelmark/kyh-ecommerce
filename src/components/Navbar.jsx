import React from 'react'
import { FaAdn } from "react-icons/fa";
import { BsSearch, BsCart3 } from "react-icons/bs";

import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='header'>
      <div className='title-logo'>
        <FaAdn size={50}/>
        <h1>ECOMMERCE</h1>
      </div>
      <div className='navigation'>
        <li><NavLink to="/">HOME</NavLink></li>
        <li><NavLink to="/product">PRODUCT</NavLink></li>
        <li><NavLink to="/contact">CONTACT</NavLink></li>
        <li><BsSearch /></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><BsCart3 />  </li>    
      </div>
    </div>
  )
}

export default Navbar