import React from 'react'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App