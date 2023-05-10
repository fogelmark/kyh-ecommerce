import { useState } from 'react'

const CollectionCard = ({ card }) => {

  return (
    <div className='collection-card'>
      <img src={card.image} />
      <p>{card.product}</p>
      <p>{card.price}</p>
    </div>
  )
}

export default CollectionCard