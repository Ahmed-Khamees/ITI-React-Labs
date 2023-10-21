import React from 'react'
import { Link } from 'react-router-dom'

export const Product = ({ id, title, price, image, rating, category }) => {
  return (
    <div class="col text-center text-black-50 p-3">
      <img src={image} alt="" height="50%" width="80%"/>
      <h4>{title}</h4>
      <p>{category}</p>
      <p>${price}</p>
      <Link to={"/shop/" + id}>Show Details</Link>
    </div>
  )
}
