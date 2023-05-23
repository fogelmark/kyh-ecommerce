import React, { useState } from 'react'
import { FaAdn } from "react-icons/fa";
import { BsSearch, BsCart3 } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import Registration from '../pages/Registration';
import ShoppingCart from './ShoppingCart';

const Navbar = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    // Perform login logic here
    // For simplicity, we'll just set isLoggedIn to true and a dummy username
    setIsLoggedIn(true);
    setUsername('JohnDoe');
  };

  const handleLogout = () => {
    // Perform logout logic here
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <div className='header'>
      <div className='title-logo'>
        <FaAdn size={35}/>
        <h1>ECOMMERCE</h1>
      </div>
      <div className='navigation'>
        <li><NavLink to="/">HOME</NavLink></li>
        <li><NavLink to="/product">PRODUCT</NavLink></li>
        <li><NavLink to="/contact">CONTACT</NavLink></li>
        <li><NavLink to="/register">REGISTER</NavLink></li>
        <li><BsSearch /></li>
        <li><NavLink to="/login">
        {isLoggedIn ? (
        <div>
          <p>Welcome, {username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          {/* <p>Please log in</p> */}
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
        </NavLink></li>
        {/* <ProductDetailsProvider> */}
          <li><ShoppingCart /></li>
        {/* </ProductDetailsProvider> */}
      </div>
    </div>
  )
}

export default Navbar