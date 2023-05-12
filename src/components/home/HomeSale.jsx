import { useState } from 'react'
import Placeholder3 from '../../assets/369x310.svg'
import HomeSaleCard from '../home/HomeSaleCard'
import HomeSaleAd from '../home/HomeSaleAd'
import HomeSaleProduct from './HomeSaleProduct'

const HomeSale = () => {


  // const [saleCard, setsaleCard] = useState([
  //   {
  //     id: 1,
  //     // image: Placeholder3,
  //     // product: 'Lorem ipsum',
  //     // originalPrice: '299,00 kr',
  //     // reducedPrice: '199,00 kr'
  //   },
  //   {
  //     id: 2,
  //     // image: Placeholder3,
  //     // product: 'Lorem ipsum',
  //     // originalPrice: '299,00 kr',
  //     // reducedPrice: '199,00 kr'
  //   },
  //   {
  //     id: 3
  //   }
  // ])

  return (

     <div className='sale-container'>
      <div className='grid-sale-template'>
        <HomeSaleProduct />
        <HomeSaleAd />
        <HomeSaleProduct />
        {/* {
          saleCard.map(card => (
          <HomeSaleCard card={card} key={card.id} /> ))
        } */}
      </div>
      </div>
  )
}

export default HomeSale