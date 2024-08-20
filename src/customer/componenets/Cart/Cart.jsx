import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { Divider } from "@mui/material";
import { Button } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { getItemToCart } from "../../../store/cart/Action";
import CurrencyRupee from "@mui/icons-material/CurrencyRupee";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector(state=>state.CartReducer);
  console.log("cart reducer state in cart.js",cart)

  const handleCheckout =()=>{
    return navigate("/checkout?step=2")
  }
  
  useEffect(()=>{
    dispatch(getItemToCart())
  },[cart.updateCartItem,cart.deleteCartItem])

  return (
    <div>
    <div className="lg: grid grid-cols-3 1g: px-16 relative">
      <div className="col-span-2">
        {cart?.cart?.cartItems.map((item)=><CartItem item={item}/>)}
      </div>
      <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
        <div className="border">
          <p className="uppercase font-bold opacity-60 pb-4">Price details</p>
          <hr />
          <div className="space-y-3 font-semibold">
          <div className="flex justify-between pt-3 text-black">
              <span>Price</span>
              <span><CurrencyRupee/>{cart?.cart?.totalPrice}</span> 
            </div>
            <div className="flex justify-between pt-3 text-black">
              <span>Discount</span>
              <span className="text-green-600">-<CurrencyRupee/>{cart?.cart?.totalDiscountedPrice}</span> 
            </div>
            <div className="flex justify-between pt-3 text-black">
              <span>Delivery charge</span>
              <span className="text-green-600">Free</span> 
            </div>
            <div className="flex justify-between pt-3 font-bold">
              <span>Total Amount</span>
              <span className="text-green-600"><CurrencyRupee/>{cart?.cart?.discount}</span> 
            </div>
          </div>
          <Button onClick={()=>handleCheckout()} variant="contained" className="w-full mt-5 bgcolor:#9155fd">
          Checkout
          </Button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Cart;
