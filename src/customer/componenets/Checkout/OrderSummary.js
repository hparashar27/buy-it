import React, { useEffect } from 'react'
import AddressCard from '../AddressCard/AddressCard'
import CartItem from '../Cart/CartItem'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getOrderById } from '../../../store/order/Action'
import { CurrencyRupee } from '@mui/icons-material'
import { createOrderPayment } from '../../../store/payment/action'

const OrderSummary = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const orderId = params.get("order_id");
  const orderData = useSelector(state=>state.OrderReducer);
  useEffect(()=>{
    dispatch(getOrderById(orderId));
  },[orderId]);
  const address = orderData?.order?.user?.address[orderData?.order?.user?.address.length - 1];
   
  const handleCheckOut = () =>{
    return dispatch(createOrderPayment(orderId))
  }
  return ( 
    
    <>
    <div className='p-5 shadow-lg rounded-s-md border'>
     <AddressCard address={address}/>
    </div>
      <div className="lg: grid grid-cols-3 1g: px-16 relative">
      <div className="col-span-2">
        {orderData?.order?.orderItems.map((item)=><CartItem item={item}/>)}
      </div>
      <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
        <div className="border">
          <p className="uppercase font-bold opacity-60 pb-4">Price details</p>
          <hr />
          <div className="space-y-3 font-semibold">
          <div className="flex justify-between pt-3 text-black">
              <span>Price</span>
              <span><CurrencyRupee/>{orderData?.order?.totalPrice}</span> 
            </div>
            <div className="flex justify-between pt-3 text-black">
              <span>Discount</span>
              <span className="text-green-600">-<CurrencyRupee/>{orderData?.order?.totalDiscountedPrice}</span> 
            </div>
            <div className="flex justify-between pt-3 text-black">
              <span>Delivery charge</span>
              <span className="text-green-600">Free</span> 
            </div>
            <div className="flex justify-between pt-3 font-bold">
              <span>Total Amount</span>
              <span className="text-green-600"><CurrencyRupee/>{orderData?.order?.discount}</span> 
            </div>
          </div>
          <Button onClick={()=>handleCheckOut()} variant="contained" className="w-full mt-5 bgcolor:#9155fd " sx={{px:"2rem", py:"1rem" , bgcolor:"#9155fd"}}>
          Place Order !
          </Button>
        </div>
      </div>
    </div>
    </>
  )
}

export default OrderSummary