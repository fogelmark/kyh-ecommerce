import React, { useContext, useState } from 'react'
import { FaAdn } from "react-icons/fa";
import { BsSearch, BsCart3 } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import Registration from '../pages/Registration';
import ShoppingCart from './shoppingcart/ShoppingCart';
import { CartContext } from '../contexts/CartContext';

const Navbar = () => {

  const { totalQuantity } = useContext(CartContext)

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
        <li className='nav-item dropdown'>
          {/* <div className='shopping-cart-container'> */}
          <div className='nav-link' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
            <BsCart3 size={30} />
            {
              totalQuantity > 0 && 
                <span className="rounded-pill">{totalQuantity}</span>
            }
          </div>
          {/* <div className='expandable-cart'> */}
          <ul className='dropdown-menu dropdown-menu-end shopping-cart'>
            <ShoppingCart />
          </ul>
        </li>
        {/* </ProductDetailsProvider> */}
      </div>
    </div>
  )
}

export default Navbar