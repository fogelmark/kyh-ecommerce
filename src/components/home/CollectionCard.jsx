import { useState } from 'react'

const CollectionCard = ({ card }) => {

  return (
    <div className='collection-card'>
      <div className='image-container'>
        <img src={card.image} />
      </div>
      <p>{card.title}</p>
      <p>{card.price}</p>
    </div>
  )
}

export default CollectionCard