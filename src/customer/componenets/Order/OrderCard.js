import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from "@mui/icons-material/Adjust"


const OrderCard = () => {
  return (
    <div className='mt-10 p-5 shadow-lg hover:shadow-2xl w-90' >
        <Grid container spacing={2} sx={{justifyContent :"space-between"}}>
         <Grid item xs={6}>
          <div className='flex cursor-pointer'>
            <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://medias.utsavfashion.com/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/e/m/embroidered-georgette-kurta-in-yellow-v2-mxx175.jpg" alt="" />
            <div children="ml-10 space-y-2">
              <p className=''>Mens solid shirt in demin</p>
              <p className='opacity-50 text-xs font-semibold'>Size : M</p>
              <p className='opacity-50 text-xs font-semibold'>Color : Black</p>
            </div>
          </div>
         </Grid>

         <Grid item xs={2}>
          <p> $1200</p>
         </Grid>

         <Grid item xs={4}>
          {true && <div><p>
            <AdjustIcon sx={{height:"15px",width:"15px",color:"green"}}/>
            <span>
              Delivered on 3rd March
            </span>
          </p>
           <p>
            Your item has been Delivered
            </p></div>}
          {false && <p>
            <span>
              Expected Delivery on 3rd March
            </span>
          </p>}
         </Grid>

        </Grid>
    </div>
  )
}

export default OrderCard