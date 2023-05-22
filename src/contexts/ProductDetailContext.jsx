import { createContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

export const ProductDetailContext = createContext()


const ProductDetailsProvider = ({children}) => {
  const [data, setData] = useState([])

  const { productId } = useParams();
  // console.log(productId);

  useEffect(() => {
    const getProductById = async () => {
      try {
        const result = await axios.get(`http://localhost:8080/api/product/${productId}`)
        setData(result.data)
        // console.log(result.data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    }

    getProductById()
  }, [])


  const value = {
    data
  }

  return (
    <ProductDetailContext.Provider value={value}>
      {children}
    </ProductDetailContext.Provider>
  )
}

export default ProductDetailsProvider