import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const ProductDetails = () => {

    const params = useParams();

    const [product, setProduct] = useState([]);

    useEffect(() => fetchProduct(), []);

    const fetchProduct = () => {
        fetch(`https://fakestoreapi.com/products/${params.id}`)
            .then(res => res.json())
            .then(json => setProduct(json))
    }

    console.log(product);

    return (
        <div className="container mx-auto py-5 row">
            <div className='col px-4 d-flex flex-column justify-content-between'>
                <h1>{product.title}</h1>
                <h5 className='text-dark-50'>{product.category}</h5> 
                <h4>{product.description}</h4>
                <h3>${product.price}</h3>
            </div>
            <div className='col d-flex justify-content-center'>
                <img src={product.image} alt="" width="60%"/>
            </div>
        </div>
    )
}
