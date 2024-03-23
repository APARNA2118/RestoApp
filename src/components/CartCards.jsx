import React from 'react'
import '../styles/CartCards.css'
import { Button } from '@mui/material'

const CartCards = ({ item, handleClick }) => {
  const { title, price, img } = item || {}

  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="Image" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>Price: Rs. {price}</p>
        <Button variant='contained' onClick={() => handleClick(item)}>Add to Cart</Button>
      </div>
    </div>
  )
}

export default CartCards