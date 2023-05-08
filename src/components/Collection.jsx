import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import CollectionCard from './CollectionCard'
import Placeholder2 from '../assets/270x295.svg'

const Collection = () => {

  const [collectionCard, setCollectionCard] = useState([
    {
      id: 1,
      image: Placeholder2
    },
    {
      id: 2,
      image: Placeholder2
    },
    {
      id: 3,
      image: Placeholder2
    },
    {
      id: 4,
      image: Placeholder2
    },
    {
      id: 5,
      image: Placeholder2
    },
    {
      id: 6,
      image: Placeholder2
    },
    {
      id: 7,
      image: Placeholder2
    },
    {
      id: 8,
      image: Placeholder2
    },
  ])

  return (
    <div className='collection-container'>
      <h1>Best Collection</h1>
      <ul>
        <li><NavLink to="#">All</NavLink></li>
        <span>/</span>
        <li><NavLink to="#">Bags</NavLink></li>
        <span>/</span>
        <li><NavLink to="#">Dress</NavLink></li>
        <span>/</span>
        <li><NavLink to="#">Decoration</NavLink></li>
        <span>/</span>
        <li><NavLink to="#">Essentials</NavLink></li>
        <span>/</span>
        <li><NavLink to="#">Interior</NavLink></li>
        <span>/</span>
        <li><NavLink to="#">Laptop</NavLink></li>
        <span>/</span>
        <li><NavLink to="#">Mobile</NavLink></li>
        <span>/</span>
        <li><NavLink to="#">Beauty</NavLink></li>
        <span>/</span>
      </ul>
      <div className='grid-template'>
        {
          collectionCard.map(card => (
            <CollectionCard card={card} key={card.id}/>
          ))
        }
      </div>
      <button>LOAD MORE</button>
    </div>
  )
}

export default Collection