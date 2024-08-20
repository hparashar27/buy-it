import React, { useEffect, useState } from 'react';
import { TextField, Button, Grid, Container, Typography } from '@mui/material';
import { purple } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, register } from '../../store/auth/Action';
import { createCartForUser } from '../../store/cart/Action';


const RegisterForm = () => {
  const dispatch = useDispatch();
  const AuthReducer = useSelector(store=>store.AuthReducer);
  const allReducer = useSelector(state=>state);
  const navigate = useNavigate(); 
  const jwt = localStorage.getItem("jwt");

  useEffect(()=>{
  if(jwt){
    dispatch(getUser(jwt))
  }
  },[jwt,AuthReducer.jwt]);

  const handleSubmit = (e) => {
    const data = new FormData(e.currentTarget);
    const userData = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
    }
    e.preventDefault();
    dispatch(register(userData))
  };
console.log("auth state from the store",);

useEffect(()=>{
  console.log("dispatcher for the cart :--------")
  ;
  console.log("creating cart for the user------")
},[AuthReducer?.user?._id])

console.log(allReducer,"all reducer")
  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="center" gutterBottom>
        Register
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="firstName"
              label="First Name"
              variant="outlined"
              fullWidth
              // value={userData.firstName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="lastName"
              label="Last Name"
              variant="outlined"
              fullWidth
              // value={userData.lastName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              fullWidth
              type="email"
              // value={userData.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="password"
              label="Password"
              variant="outlined"
              fullWidth
              type="password"
              // value={userData.password}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ backgroundColor: purple[600], color: 'white' }}
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className='flex flex-row text-center opacity-70 mt-5 ml-4'>already have an account ?  
        <button className='ml-2' onClick={()=>navigate("/signIn")}>
           <p className='text-blue-700 opacity-1'>signIn</p>
        </button> 
      </div>
    </Container>
  );
};

export default RegisterForm;
