import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, Link } from 'react-router-dom'
import CollectionCard from './CollectionCard'

const Collection = () => {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const result = await axios.get('http://localhost:8080/api/product');
    setData(result.data);
    console.log(result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='collection-container'>
      <h1>Best Collection</h1>
      <ul>
        <li><NavLink to="#">All</NavLink></li>
        <span>/</span>
        <li><NavLink to="#">Bags</NavLink></li>
        <span>/</span>
        <li><NavLink to="#">Dress</NavLink></li>
        <span>/</span>
        <li><NavLink to="#">Decoration</NavLink></li>
        <span>/</span>
        <li><NavLink to="#">Essentials</NavLink></li>
        <span>/</span>
        <li><NavLink to="#">Interior</NavLink></li>
        <span>/</span>
        <li><NavLink to="#">Laptop</NavLink></li>
        <span>/</span>
        <li><NavLink to="#">Mobile</NavLink></li>
        <span>/</span>
        <li><NavLink to="#">Beauty</NavLink></li>
        <span>/</span>
      </ul>
      <div className='grid-collection-template'>
        {
          data.map(card => (
            <Link to={`/productdetails/`} key={card._id}>
              <CollectionCard card={card} key={card._id} />
            </Link>
          ))
        }
      </div>
      <button className='button button-secondary'>load more</button>
    </div>
  )
}

export default Collection