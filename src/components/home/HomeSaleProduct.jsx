import { useState } from 'react'
import Placeholder3 from '../../assets/369x310.svg'
import { MdAddShoppingCart } from "react-icons/md";


const HomeSaleProduct = () => {

  return (
    <div className='sale-card'>
      <img src={Placeholder3} />
      <div className='product-title'>
        <p>Table Lamp - Lorem, ipsum.</p>
      </div>
      <div className='product-info'>
        <div className='sale-price'>
          <p>299,00 kr</p>
          <p>199,00 kr</p>
        </div>
        <MdAddShoppingCart style={{color: '#a1a1a1'}}/>
      </div>
    </div>
  )
}

export default HomeSaleProduct