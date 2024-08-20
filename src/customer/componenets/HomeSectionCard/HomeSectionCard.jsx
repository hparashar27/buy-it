import React from 'react'

const HomeSectionCard = ({product}) => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white:500 rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3'>
    <div className='h-[13rem] w-[10rem]'>
    <img className='object-cover object-top w-full h-full' src={product.image}>
    </img>
    </div>
    <div className='my-5 text-center'>{product.brand}</div>
    <div className='text-center '> {product.title}</div>
    </div>
  )
}

export default HomeSectionCard