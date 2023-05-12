import React from 'react'
import HomeHero from '../components/home/HomeHero'
import Collection from '../components/home/Collection'
import HomeSale from '../components/home/HomeSale'
import TopSellers from '../components/home/TopSellers'
import NewsLetter from '../components/home/NewsLetter'

const Home = () => {
  return (
    <div>
      <HomeHero />
      <Collection />
      <HomeSale />
      <TopSellers />
      <NewsLetter />
    </div>
  )
}

export default Home