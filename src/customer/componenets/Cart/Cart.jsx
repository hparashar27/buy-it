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
  const cart = useSelector(state => state.CartReducer);
  // console.log("cart reducer state in cart.js", cart);

  const handleCheckout = () => {
    return navigate("/checkout?step=2");
  };

  useEffect(() => {
    dispatch(getItemToCart());
  }, [dispatch, cart.updateCartItem, cart.deleteCartItem]);

  return (
    <div className="lg:px-16 px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
        <div className="lg:col-span-2">
          {cart?.cart?.cartItems?.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className="lg:sticky lg:top-0 h-full mt-5 lg:mt-0">
          <div className="border p-5 rounded-lg shadow-md">
            <p className="uppercase font-bold opacity-60 pb-4">Price details</p>
            <Divider />
            <div className="space-y-3 font-semibold pt-4">
              <div className="flex justify-between text-black">
                <span>Price</span>
                <span>
                  <CurrencyRupee />
                  {cart?.cart?.totalPrice}
                </span>
              </div>
              <div className="flex justify-between text-black">
                <span>Discount</span>
                <span className="text-green-600">
                  -<CurrencyRupee />
                  {cart?.cart?.totalDiscountedPrice}
                </span>
              </div>
              <div className="flex justify-between text-black">
                <span>Delivery charge</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total Amount</span>
                <span className="text-green-600">
                  <CurrencyRupee />
                  {cart?.cart?.discount}
                </span>
              </div>
            </div>
            <Button
              onClick={handleCheckout}
              variant="contained"
              className="w-full mt-5 bg-indigo-600 text-white hover:bg-indigo-700"
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
