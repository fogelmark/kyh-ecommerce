import React from 'react'
import HomeHero from '../components/home/HomeHero'
import Collection from '../components/home/Collection'
import HomeSale from '../components/home/HomeSale'

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