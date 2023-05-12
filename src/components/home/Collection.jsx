import { useState } from 'react'
import { NavLink } from 'react-router-dom'
// import Placeholder2 from '../assets/270x295.svg'
import Placeholder2 from '../../assets/270x295.svg'
import CollectionCard from './CollectionCard'

const Collection = () => {

  const [collectionCard, setCollectionCard] = useState([
    {
      id: 1,
      image: Placeholder2,
      product: 'Lorem ipsum',
      price: '499,00 kr'
    },
    {
      id: 2,
      image: Placeholder2,
      product: 'Lorem ipsum',
      price: '499,00 kr'
    },
    {
      id: 3,
      image: Placeholder2,
      product: 'Lorem ipsum',
      price: '499,00 kr'
    },
    {
      id: 4,
      image: Placeholder2,
      product: 'Lorem ipsum',
      price: '499,00 kr'
    },
    {
      id: 5,
      image: Placeholder2,
      product: 'Lorem ipsum',
      price: '499,00 kr'
    },
    {
      id: 6,
      image: Placeholder2,
      product: 'Lorem ipsum',
      price: '499,00 kr'
    },
    {
      id: 7,
      image: Placeholder2,
      product: 'Lorem ipsum',
      price: '499,00 kr'
    },
    {
      id: 8,
      image: Placeholder2,
      product: 'Lorem ipsum',
      price: '499,00 kr'
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
      <div className='grid-collection-template'>
        {
          collectionCard.map(card => (
            <CollectionCard card={card} key={card.id} />
          ))
        }
      </div>
      <button className='button button-secondary'>load more</button>
    </div>
  )
}

export default Collection