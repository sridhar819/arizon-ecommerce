import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage';
import FullCartPage from './pages/FullCartPage';
import Header from './components/Header';
import CartContext from './context/CartContext';

import './App.css'
const App = () => {
  const [cartList, setCart] = useState([]);

  const addCart = (product) => {
    const isIncludeProduct = cartList.find(each => each.id === product.id);

    if (!isIncludeProduct) {
      setCart(pre => [...pre, { ...product, quantity: 1 }])
    }
  }

  const increaseQuantity = id => {
    setCart(pre => pre.map(product => product.id === id ? { ...product, quantity: product.quantity + 1 } : product))
  }

  const decrementQuantity = id => {
    setCart(pre => pre.map(product => product.id === id ? { ...product, quantity: product.quantity - 1 } : product))
  }

  const removeItem = id => {
    setCart(pre => pre.filter(product => product.id !== id))
  }

  return (
    <CartContext.Provider value={{ cartList, addCart, increaseQuantity, decrementQuantity, removeItem }}>
      <div className='relative'>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListingPage />} />
          <Route path="/cart" element={<FullCartPage />} />
        </Routes>
      </div>
    </CartContext.Provider>
  )
};

export default App;