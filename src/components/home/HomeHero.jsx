import React from 'react'
import Placeholder from '../../assets/625x647.svg'




const HomeHero = () => {
  return (
    <div className='home-hero'>
      <div className='home-hero-left'>
        <p>WELCOME TO ECOMMERCE</p>
        <h1>Exclusive mens wear</h1>
        <button className='button button-primary'>shop now</button>
      </div>
      <div className='home-hero-right'>
        {/* <img src={Placeholder} alt="Placeholder" /> */}
        <div className='image-container'></div>
      </div>
    </div>
  )
}

export default HomeHero