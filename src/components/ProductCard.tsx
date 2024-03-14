import React from 'react'
import { Product } from '../types'


const ProductCard = (props: Product) => {
  return (
    <div>
      <img src={props.image} alt={`${props.title} image`}></img>
      <div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
      <div>
        <p>${props.price}</p>
      </div>
    </div>
  )
}

export default ProductCard