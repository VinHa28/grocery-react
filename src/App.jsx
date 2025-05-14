import { useState } from 'react'

import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import MainLayout from './layouts/MainLayout';
import Test from './pages/Test';

function App() {
  return (
    <>
    <MainLayout>
      <Routes>
        <Route path='/' element={<Test/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/detail' element={<DetailPage/>}/>
      </Routes>
      </MainLayout> 
    </>
  )
}

export default App
