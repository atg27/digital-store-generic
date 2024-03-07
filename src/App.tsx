import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Product from './pages/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header title='WEBROAD'/>
    <Product title='Complete Web Development Bundle' description='This is a complete web development bundle that includes everything you need to learn to become a professional web developer.' images={[{src: 'https://via.placeholder.com/150', alt: 'A book'}]} price={12.99} />
    </>
  )
}

export default App
