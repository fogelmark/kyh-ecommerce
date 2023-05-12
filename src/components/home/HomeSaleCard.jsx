import { useState } from 'react'
import HomeSaleAd from '../home/HomeSaleAd'
import HomeSaleProduct from './HomeSaleProduct'

// const HomeSaleCard = ({card}) => {
//   return (
//     <div className='sale-card'>
//       <img src={card.image} />
//       <p>{card.product}</p>
//       <div className='sale-price'>
//         <p>{card.originalPrice}</p>
//         <p>{card.reducedPrice}</p>
//       </div>
//     </div>
//   )
// }
const HomeSaleCard = ({card}) => {
  return (
    <div className='sale-card'>
      {/* <HomeSaleAd />
      <HomeSaleProduct /> */}
    </div>
  )
}

export default HomeSaleCard