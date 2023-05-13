import React from 'react'
import ProductDetailHero from '../components/ProductDetailsHero'
import ProductDetailInfo from '../components/ProductDetailInfo'
import ProductDetailDesc from '../components/ProductDetailDesc'


const ProductDetails = () => {
    return (
        <div>
            <ProductDetailHero />
            <ProductDetailInfo />
            <ProductDetailDesc />
        </div>
    )
}

export default ProductDetails