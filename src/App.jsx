import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import CheckoutPage from './pages/CheckoutPayment/CheckoutPage';
import CartPage from './pages/CheckoutPayment/CartPage';
import PaymentPage from './pages/CheckoutPayment/PaymentPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/Auth/LoginPage';
import FavoritePage from './pages/CheckoutPayment/FavoritePage';
import SignUpPage from './pages/Auth/SignUpPage';
import ResetPassword from './pages/Auth/ResetPassword';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/reset-password' element={<ResetPassword />} />

        <Route element={<MainLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/detail' element={<DetailPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/payment' element={<PaymentPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/favorite' element={<FavoritePage />}></Route>
        </Route>
      </Routes>
    </>

  )
}

export default App
