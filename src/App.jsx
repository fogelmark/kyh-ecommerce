import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Registration from './pages/Registration'
import Footer from './components/Footer'
import ProductDetails from './pages/ProductDetails.jsx'
import UserProfile from './pages/UserProfile'

const App = () => {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Registration />}/>
        <Route path='/productdetails/:productId' element={<ProductDetails />} />
        <Route path='/userprofile' element={<UserProfile />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App