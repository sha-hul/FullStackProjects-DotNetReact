import React from 'react'
import {useParams} from 'react-router-dom'

function ProductDetails() {
  const {id} = useParams();
  return (
    <div className='text-light'>ProductDetails
    <p>Product ID : {id}</p>
    </div>
  )
}

export default ProductDetails