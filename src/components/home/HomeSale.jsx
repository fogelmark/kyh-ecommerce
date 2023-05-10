import { useState } from 'react'
import Placeholder3 from '../../assets/369x310.svg'
import HomeSaleCard from '../home/HomeSaleCard'

const HomeSale = () => {


  const [saleCard, setsaleCard] = useState([
    {
      id: 1,
      image: Placeholder3
    },
    {
      id: 2,
      image: Placeholder3
    },
    {
      id: 3,
      image: Placeholder3
    }

  ])

  return (

     <div className='collection-container'>
      <div className='grid-template'>
        {
        saleCard.map(card => (
        <HomeSaleCard card={card} key={card.id} /> ))
      }
      </div>
      </div>
  )
}

export default HomeSale