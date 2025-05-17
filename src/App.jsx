import { useState } from 'react'

import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <>
    <MainLayout>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/detail' element={<DetailPage/>}/>
      </Routes>
      </MainLayout> 
    </>
  )
}

export default App
