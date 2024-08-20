import React from 'react'
import AddressCard from '../AddressCard/AddressCard';
import OrderTracker from './OrderTracker';
import {Box} from '@mui/material';
import { Grid } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import StarIcon from '@mui/icons-material/Star';


const OrderDetail = () => {
  return (
    <div>  <div className='px:5 lg:px-20'>
    <div>
      <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
      <AddressCard/>
    </div>
    <div>
      <OrderTracker/>
    </div>
    <Grid className="space-x-5" container>
    <Grid item container className='shadow-xl rounded-md p-5 border' sx={{alignItems:"center" , justifyContent:'space-between'}}>
    <Grid item xs={6}>
      <div>
      <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://medias.utsavfashion.com/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/e/m/embroidered-georgette-kurta-in-yellow-v2-mxx175.jpg" alt="" />

      <div className='space-y-2'>
      <p>Men Slim Mid Rise Black Jeans</p>
      <p className='space-x-2'>
        <span>Color : pink</span>
        <span>Size : M</span>
      </p>
      <p>Seller : linaria</p>
      <p>$1200</p>
      </div>
      </div>
    </Grid>
    <Grid item>
     <Box sx={{color:deepPurple[500]}}>
     <StarIcon sx fontSize={'2px'} className="2px"/>
     <span></span>
     </Box>
    </Grid>
    </Grid>
    </Grid>
  </div></div>
  )
}

export default OrderDetail


