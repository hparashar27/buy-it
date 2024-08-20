import { Grid } from "@mui/material";
import React from "react";
import OrderCard from "./OrderCard";

const Order = () => {
  const orderStatus = [
    { lable: "On The Way", value: "on_the_way" },
    { lable: "Delivered", value: "delevered" },
    { lable: "Cancelled", value: "cancelled" },
    { lable: "Returned", value: "returned" },
  ];

  return (
    <div>
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={2.5}>
          <div className="h-auto shadow-1g bg-white p-5 sticky top-5">
            <h1 className="font-bold text-lg">Filter</h1>
            <div className="space-y-4 mt-10">
              <h1 className="font-semibold">OREDER STATUS</h1>﻿
              {orderStatus.map((option) => (
                <div className="flex items-center space-x-3">
                  <input
                    defaultValue={option.value}
                    type="checkbox"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus: ring-indigo-500"
                  />
                  <label
                    className="m1-3 text-sm text-gray-600"
                    html
                    For={option.value}
                  >
                    {option.lable}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </Grid>
        <Grid item xs={9}>
           <div className="space-y-0">
           {[1,1,1,1,1,1].map((item)=>
            <OrderCard/>)}
           </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Order;
