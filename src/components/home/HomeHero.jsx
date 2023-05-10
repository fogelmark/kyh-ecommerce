import React from 'react'
import Placeholder from '../../assets/625x647.svg'




const HomeHero = () => {
  return (
    <div className='home-hero'>
      <div className='home-hero-left'>
        <p>Welcome!</p>
        <h1>Exclusive mens wear</h1>
        <button>SHOP NOW</button>
      </div>
      <div className='home-hero-right'>
        <img src={Placeholder} alt="Placeholder" />
      </div>
    </div>
  )
}

export default HomeHero