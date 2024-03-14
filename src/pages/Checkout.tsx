import React from 'react'
import ProductCard from '../components/ProductCard'
import PRODUCT from '../productInfo'
import Product from './Product'

const Checkout = () => {
  return (
    <div><ProductCard {...PRODUCT} /></div>
  )
}

export default Checkout