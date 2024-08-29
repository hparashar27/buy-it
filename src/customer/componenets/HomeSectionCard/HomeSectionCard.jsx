import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomeSectionCard = ({product}) => {
  const navigate = useNavigate();
  return (
    <div  onClick={()=>navigate(`/product/${product._id}`)} className='cursor-pointer flex flex-col items-center bg-white:500 rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3'>
    <div className='h-[13rem] w-[10rem]'>
    <img className='object-cover object-top w-full h-full' src={product.imageUrl}>
    </img>
    </div>
    <div className='my-5 text-center'>{product.brand}</div>
    <div className='text-center '> {product.title}</div>
    </div>
  )
}

export default HomeSectionCard