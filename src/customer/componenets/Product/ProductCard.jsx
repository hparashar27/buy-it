import React from 'react'
import './ProductCard.css'
import { useNavigate } from 'react-router-dom'
import { CurrencyRupee } from '@mui/icons-material'



const ProductCard = ({product}) => {
  const percentOff = (((product?.price-product?.discountedPrice)/product?.price)*100).toFixed(2);
  const navigate = useNavigate();
  return (
    <div className='productcard w-[15rem] m-3 transition-all cursor-pointer hover:shadow-lg hover:scale-105' onClick={()=>navigate(`/product/${product._id}`)}>
      <div className='h-[20rem]'>
      <img className='h-full w-full object-cover object-left-top' alt='' src={product.imageUrl}/>
      </div>
      <div  className='bg-white text-part p-3' >
        <div>
          <p className='font-bold opacity-50'>{product.brand}</p>
          <p>{product.title}</p>
        </div>
        <div className='items-center flex space-x-2'>
        <p className="font-semibold flex items-center">
    {product.discountedPrice} ₹
  </p>
  <p className="line-through opacity-50 flex items-center">
    {product.price} ₹
  </p>
          <p className='text-green-500 front semi-bold'>{percentOff} % off</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard