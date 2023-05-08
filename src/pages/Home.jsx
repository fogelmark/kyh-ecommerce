import React from 'react'
import HomeHero from '../components/HomeHero'
import Collection from '../components/Collection'
import HomeSale from '../components/HomeSale'

const Home = () => {
  return (
    <div>
      <HomeHero />
      <Collection />
      <HomeSale />
    </div>
  )
}

export default Home