import React from 'react'

import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'

import Home from './pages/Home'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Login from './pages/Login'
import ProductDetails from './pages/ProductDetails'



const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='product' element={<Product />} />
        <Route path='contact' element={<Contact />} />
        <Route path='login' element={<Login />} />
        <Route path='productDetails' element={<ProductDetails />} />
      </Routes>
    </div>
  )
}

export default App