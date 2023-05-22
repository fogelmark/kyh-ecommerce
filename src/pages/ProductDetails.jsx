import React, { useState, useEffect } from 'react'
import ProductDetailHero from '../components/ProductDetailsHero'
import ProductDetailInfo from '../components/ProductDetailInfo'
import ProductDetailDesc from '../components/ProductDetailDesc'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductDetailsProvider from '../contexts/ProductDetailContext';

const ProductDetails = () => {
  // const { productId } = useParams();



  return (
    <div>
      
      <ProductDetailHero />
      <ProductDetailsProvider>
        <ProductDetailInfo />
        <ProductDetailDesc />
      </ProductDetailsProvider>
    </div>
  )
}

export default ProductDetails