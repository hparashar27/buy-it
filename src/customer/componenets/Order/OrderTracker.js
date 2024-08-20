import { StepLabel, Stepper ,Step } from "@mui/material";
import React from "react";

const steps = [
  "placed",
  "Order Confirmed",
  "Shipped",
  "Out For Delivery",
  "Deliverd",
];

const OrderTracker = ({ activeStep }) => {
  return (
    <div className="w-full">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label)=>
            <Step>
            <StepLabel sx={{color:"purple" , fontSize:"44px"}}>
                {label}
            </StepLabel>
            </Step>)}
      </Stepper>
    </div>
  );
};

export default OrderTracker;
