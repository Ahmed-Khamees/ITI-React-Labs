import { React, useState, useEffect } from 'react'
import { Product } from './Product';

export const Shop = () => {

  const [ProductsArray, setProductsArray] = useState([]);

  useEffect(() => fetchProducts(), []);

  const fetchProducts = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProductsArray(json))
  }

  return (
    <div className="row row-cols-5 contaienr mx-auto">
      {ProductsArray?.map((product) => {
        return <Product id={product.id} title={product.title} price={product.price} image={product.image} rating={product.rating} category={product.category} />
      })}
    </div>

    // <h2>test</h2>
  )
}
