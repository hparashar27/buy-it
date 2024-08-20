import { IconButton } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import React from "react";
import { Button } from "@headlessui/react";
import { CurrencyRupee } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { removeItemToCart, updateItemToCart } from "../../../store/cart/Action";

const CartItem = ({item}) => {
  const dispatch = useDispatch();

const handleUpdateItem = (num) =>{
const data = {data:{quantity:item?.quantity + num},cartItemId:item?._id}
return dispatch(updateItemToCart(data));
}

const handleDeleteItem = () =>{
  return dispatch(removeItemToCart(item._id))
} 

  const percentOff = (((item?.product?.price-item?.product?.discountedPrice)/item?.product?.price)*100).toFixed(2);
  return (
    <div className="p-5 shadow-1g border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] 1g:w-[9rem] 1g:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src={item?.product?.imageUrl}
            id={item._id}
            alt=""/>
        </div>
        <div className="m1-5 space-y-1">
          <p className="font-semibold">{item?.product?.title}</p>
          <p className="opacity-70">Size:{item?.size}</p>
          <p className="opacity-70 mt-2">{item?.product?.brand}</p>
          <div className='flex space-x-5 items-center text-lg lg:text-xl text-gray-600 mt-6'>
            <p className='font-semibold'><CurrencyRupee/>{item?.product?.discountedPrice}</p>
            <p className='opacity-50 line-through'><CurrencyRupee/>{item?.product?.price}</p>
            <p className='font-semibold text-green-600'>{percentOff} % off </p>
            </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton onClick={()=>handleUpdateItem(-1) } disabled={item.quantity<=1} sx={{color:"purple"}}>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="px-7 py-1 border rounded-sm">{item?.quantity}</span>
          <IconButton onClick={()=>handleUpdateItem(+1)} sx={{color:"purple"}}>
            <AddCircleOutlineIcon/>
          </IconButton>
      </div>
      <div>
        <Button onClick={()=>handleDeleteItem()}className="bg-slate-600">Remove</Button>
      </div>
      </div>
    </div>
  );
};
export default CartItem;
