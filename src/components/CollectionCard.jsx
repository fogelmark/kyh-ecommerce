import { useState } from 'react'

const CollectionCard = ({ card }) => {

  return (
    <div>
      <img src={card.image} />
    </div>
  )
}

export default CollectionCard