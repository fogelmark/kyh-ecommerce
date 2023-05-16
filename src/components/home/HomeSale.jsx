import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import HomeSaleAd from '../home/HomeSaleAd'
import HomeSaleProduct from './HomeSaleProduct'

const HomeSale = () => {

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
      <div className='sale-container'>
        <div className='grid-sale-template'>
          { // Ta bort en HomeSaleAd
            // Mappa istället ut de båda och flytta runt de med grid areas
          }
          <HomeSaleAd />
          {
          data.map(card => (
            <Link to={`/productdetails/`} key={card._id}>
              <HomeSaleProduct card={card} key={card._id} />
            </Link>
          ))
        }
        </div>
      </div>
  )
}

export default HomeSale