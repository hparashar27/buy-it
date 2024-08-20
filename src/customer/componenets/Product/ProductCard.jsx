import React from 'react'
import './ProductCard.css'
import { useNavigate } from 'react-router-dom'



const ProductCard = ({product}) => {
  const navigate = useNavigate();
  return (
    <div className='productcard w-[15rem] m-3 transition-all cursor-pointer' onClick={()=>navigate(`/product/${product._id}`)}>
      <div className='h-[20rem]'>
      <img className='h-full w-full object-cover object-left-top' alt='' src={product.imageUrl}/>
      </div>
      <div  className='bg-white text-part p-3' >
        <div>
          <p className='font-bold opacity-50'>{product.brand}</p>
          <p>{product.title}</p>
        </div>
        <div className='items-center flex space-x-2'>
          <p className='font-semibold'>{product.discountedPrice}$</p>
          <p className='line-through opacity-50'>2{product.price}$</p>
          <p className='text-green-500 front semi-bold'>{product.discountPersent} % off</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard