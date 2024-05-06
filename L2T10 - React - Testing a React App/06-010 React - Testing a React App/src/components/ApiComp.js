import React, { useEffect, useState } from 'react'

export default function ApiComp() {
const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products/category/smartphones')
        .then(response => response.json())
        .then(json => setProducts(json))

    }, [])


  return (
    <div className='products'>{products?.products?.map((item,i) => {
      return  <div className='item'>
        <p>{item.brand}</p>
        <img src={item.images[0]} alt={item.brand} />
        </div>
    })}</div>
  )
}
