import React from 'react'
import { Link } from 'react-router-dom'

const ProductComponent = ({product}) => {
  const {id, title, image, price, category} = product

  return (
    <Link to={`/products/${id}`}>
    <div className="flex flex-col my-5 w-60 h-75 rounded-md px-4 py-2 hover:scale-105">
      <img className="w-full h-60" src={image} alt={id}/>
      <div className='border-t-slate-600'>
        <p title={title} className='text-md font-medium truncate max-w-[20ch]'>{title}</p>
        <p className='text-md font-bold'>$ {price}</p>  
        <p className='text-sm'>{category}</p>  
      </div>
     </div>  
    <button className='w-3/4 mx-auto px-4 py-1 rounded-lg text-red-950 bg-gray-400'>Add to Cart</button>
    </Link>  
  )
}       

export default ProductComponent;