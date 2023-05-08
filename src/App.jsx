import React from 'react'

import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'

import Home from './pages/Home'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Login from './pages/Login'



const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route element={<Product />} />
        <Route element={<Contact />} />
        <Route element={<Login />} />
      </Routes>
      {/* <Home /> */}
    </div>
  )
}

export default App