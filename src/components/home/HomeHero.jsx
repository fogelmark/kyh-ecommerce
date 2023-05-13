import React from 'react'
import Placeholder from '../../assets/625x647.svg'
import axios from 'axios'






const HomeHero = ({product}) => {

  // Från product props får man ut alla produkter
  // console.log(product[1].imageURL);
  
  return (
    <div className='home-hero-container'>
      <div className='home-hero-left'>
        <p>WELCOME TO ECOMMERCE</p>
        <h1>Exclusive mens wear</h1>
        <button className='button button-primary'>shop now</button>
      </div>
      <div className='home-hero-right'>
        {/* <div className='image-container'> */}
          {/* <img src={product[1].imageURL} alt="hej" /> */}
        {/* </div> */}
      </div>
    </div>
  )
}

export default HomeHero