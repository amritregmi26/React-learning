import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import Cart from '../pages/cart'

const AllRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} end />
        <Route path='/cart' element={<Cart />} end/>
    </Routes>
  );
}

export default AllRoute