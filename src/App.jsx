import {useEffect, useState} from 'react'

import { Route, Routes } from 'react-router-dom'
import axios from 'axios'

import Navbar from './components/Navbar'

import Home from './pages/Home'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Registration from './pages/Registration'
import Footer from './components/Footer'
import ProductDetails from './pages/ProductDetails.jsx'



const App = () => {

    useEffect(() => {
    const token = localStorage.getItem('token')
    if(token) {
      axios.get('http://localhost:9090/api/user/')
        .then(res => {
          console.log(res)
        })
    }
  }, [])

  const [user, setUser] = useState(null)

  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='product' element={<Product />} />
        <Route path='contact' element={<Contact />} />
        <Route path='login' element={<Login user={user} setUser={setUser}/>} />
        <Route path='register' element={<Registration user={user} setUser={setUser}/>}/>
        <Route path='productDetails' element={<ProductDetails />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App