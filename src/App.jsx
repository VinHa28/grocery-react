import { useState } from 'react'

import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import MainLayout from './layouts/MainLayout';
import ScrollToTop from './components/ScrollToTop';
import CheckoutPage from './pages/CheckoutPayment/CheckoutPage';
import CartPage from './pages/CheckoutPayment/CartPage';
import PaymentPage from './pages/CheckoutPayment/PaymentPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/Auth/LoginPage';

function App() {
  return (
    <>
      <ScrollToTop />

       <Routes>
        {/* Các route không dùng layout chính */}
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<LoginPage />} />

        {/* Các route dùng chung layout */}
        <Route element={<MainLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/detail' element={<DetailPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/payment' element={<PaymentPage />} />
          <Route path='/profile' element={<ProfilePage />} />
        </Route>
      </Routes>
    </>

  )
}

export default App
