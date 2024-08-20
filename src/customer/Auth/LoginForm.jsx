import React, { useEffect, useState } from 'react';
import { TextField, Button, Grid, Container, Typography, Box, Paper } from '@mui/material';
import { purple } from '@mui/material/colors';
import { useNavigate} from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { getUser, login } from '../../store/auth/Action';

const LoginForm = () => {
  const jwt = localStorage.getItem("jwt");
  
  const dispatch = useDispatch();
  const AuthReducer = useSelector(store=>store);
  console.log(AuthReducer,"auth reducer state");

  useEffect(()=>{
    if(jwt){
      dispatch(getUser())
    }
  },[])

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    const data = new FormData(e.currentTarget);
    const userData = {
      email: data.get('email'),
      password: data.get('password'),
    }
    e.preventDefault();
    dispatch(login(userData));
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              fullWidth
              type="email"
              // value={formData.email}
              // onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="password"
              label="Password"
              variant="outlined"
              fullWidth
              type="password"
              // value={formData.password}
              // onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ backgroundColor: purple[600], color: 'white' }}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className='flex flex-row text-center opacity-70 mt-5 ml-4'>if you do not have account ?  
        <button className='ml-2' onClick={()=>navigate("/register")}>
           <p className='text-blue-700 opacity-1'>register</p>
        </button> 
      </div>
    </Container>
  );
};

export default LoginForm;
