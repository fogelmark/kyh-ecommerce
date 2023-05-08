import React from 'react'
import { FaAdn } from "react-icons/fa";
import { BsSearch, BsCart3 } from "react-icons/bs";

import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <div>
      <FaAdn />
      <h1>MensWear</h1>
      </div>
      <div>
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/product">PRODUCT</NavLink>
      <NavLink to="/contact">CONTACT</NavLink>
      <BsSearch />
      <NavLink to="login">login</NavLink>
      <BsCart3 />
      




      
      </div>


    </div>
  )
}

export default Navbar