import React, { useContext } from 'react'

import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'

import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'

const Product = () => {
  const {products} = useContext(ShopContext);
  const {productId} = useParams();
  const product = products.find((e)=>e.id === Number(productId));
  return (
    <div>
      
      <ProductDisplay product={product}/>
    </div>
  )
}

export default Product
