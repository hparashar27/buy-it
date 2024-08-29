import React, { useEffect } from 'react';
import AddressCard from '../AddressCard/AddressCard';
import CartItem from '../Cart/CartItem';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getOrderById } from '../../../store/order/Action';
import { CurrencyRupee } from '@mui/icons-material';
import { createOrderPayment } from '../../../store/payment/action';

const OrderSummary = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const orderId = params.get("order_id");
  const orderData = useSelector(state => state.OrderReducer);

  useEffect(() => {
    if (orderId) {
      dispatch(getOrderById(orderId));
    }
  }, [dispatch, orderId]);

  const address = orderData?.order?.user?.address?.[orderData?.order?.user?.address.length - 1];

  const handleCheckOut = () => {
    return dispatch(createOrderPayment(orderId));
  };

  return (
    <>
      <div className='p-5 shadow-lg rounded-md border mb-8'>
        <AddressCard address={address} />
      </div>
      <div className="lg:grid grid-cols-3 gap-8 px-4 lg:px-16 relative">
        <div className="col-span-2">
          {orderData?.order?.orderItems?.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}
        </div>
        <div className="px-5 lg:sticky lg:top-0 h-full lg:mt-0">
          <div className="border p-5 rounded-lg shadow-md">
            <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
            <hr />
            <div className="space-y-3 font-semibold">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>
                  <CurrencyRupee />
                  {orderData?.order?.totalPrice}
                </span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Discount</span>
                <span className="text-green-600">
                  -<CurrencyRupee />
                  {orderData?.order?.totalDiscountedPrice}
                </span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Delivery charge</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between pt-3 font-bold">
                <span>Total Amount</span>
                <span className="text-green-600">
                  <CurrencyRupee />
                  {orderData?.order?.discount}
                </span>
              </div>
            </div>
            <Button
              onClick={handleCheckOut}
              variant="contained"
              className="w-full mt-5 bg-purple-600 text-white hover:bg-purple-700"
              sx={{ padding: '0.75rem 2rem' }}
            >
              Place Order!
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
