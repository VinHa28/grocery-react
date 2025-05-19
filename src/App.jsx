import { useState } from 'react'

import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import MainLayout from './layouts/MainLayout';
import ScrollToTop from './components/ScrollToTop';
import CheckoutPage from './pages/CheckoutPayment/CheckoutPage';
import CartPage from './pages/CheckoutPayment/CartPage';

function App() {
  return (
    <>
      <ScrollToTop />
      <MainLayout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/detail' element={<DetailPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
        </Routes>
      </MainLayout>
    </>

  )
}

export default App
