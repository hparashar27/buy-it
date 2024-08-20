import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Footer from './customer/componenets/Footer/Footer';
import MainCarousel from './customer/componenets/HomeCarousel/MainCarousel';
import Navigation from './customer/componenets/Navigation/Navigation';
import HomePage from './customer/pages/HomePage/HomePage';
import Product from "./customer/componenets/Product/Product"
import ProductDetails from './customer/componenets/ProductDetail/ProductDetails';
import CartItem from './customer/componenets/Cart/CartItem';
import Cart from './customer/componenets/Cart/Cart';
import Checkout from './customer/componenets/Checkout/Checkout';
import Order from './customer/componenets/Order/Order';
import OrderDetail from './customer/componenets/Order/OrderDetail';
import PaymentSuccess from './customer/componenets/paymentSuccess/PaymentSuccess';

function App() {
  return (
      <div className=''>
      <Navigation/>
      <div>
        <Routes>
        <Route path='/signIn' element={<HomePage/>}></Route>
          <Route path='/register' element={<HomePage/>}></Route>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path="/product" element={<Product/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product/>}></Route>
          <Route path='/product/:productId' element={<ProductDetails />}></Route>
          <Route path='/checkout' element={<Checkout/>}></Route>
          <Route path='/account/order' element={<Order/>}></Route>
          <Route path='/account/order/:orderId' element={<OrderDetail/>}></Route>
          <Route path='/payment/:orderId' element={<PaymentSuccess/>}></Route>
        </Routes>
      </div>
      <Footer/>
      </div>
  );
}

export default App;
