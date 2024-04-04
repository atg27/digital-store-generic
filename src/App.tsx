import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Product from './pages/Product'
import thumbnailImg from './assets/thumbnail.png'
import { Routes, Route, Outlet, Link } from 'react-router-dom'
import Checkout from './pages/Checkout'
import Success from './components/Success'

function Layout() {
  return (
    <>
      <h1>Layout</h1>
      <Header title='WEBROAD'/>
      <Outlet />
    </>
  )
}

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index path='/' element={ <Product title='Complete Web Development Bundle' description='This is a complete web  development bundle that includes everything you need to learn to become a professional web developer.' images={[{src: thumbnailImg, alt: 'A book'}]} price={12.99} />}/>
      </Route>
      <Route path='checkout' element={<Checkout />}/>
      <Route path='success' element={<Success />}/>
    </Routes>
  )
}

export default App
