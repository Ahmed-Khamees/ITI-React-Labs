import { React, useState, useEffect } from 'react'
import useGetDataFromAPI from '../../hooks/useGetDataFromAPI';
import { Loading } from '../LabForth/Loading';
import { Product } from './Product';

export const Shop = () => {

  let { data, loading, error } = useGetDataFromAPI('https://fakestoreapi.com/products');

  return (
    <Loading loading={loading} error={error}>
      <div className="row row-cols-5 contaienr mx-auto py-5">
        {data?.map((product) => {
          return <Product key={product.id} id={product.id} title={product.title} price={product.price} image={product.image} rating={product.rating} category={product.category} />
        })}
      </div>
    </Loading>
  )
}
