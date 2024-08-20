import React, { useEffect } from 'react';
import { Container, Box, Typography, Button, List, ListItem, Divider } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getOrderById } from '../../../store/order/Action';
import CartItem from '../Cart/CartItem';
import { updateOrderPayment } from '../../../store/payment/action';

const PaymentSuccess = () => {
    const dispatch = useDispatch();
    const url = new URL(window.location.href);
    const pathSegments = url.pathname.split('/');
    const orderId = pathSegments[pathSegments.length - 1];
    const params = new URLSearchParams(url.search);
    const paymentId = params.get('razorpay_payment_id');

    const orderData = useSelector(state=>state.OrderReducer);
    // const allReducer = useSelector(state=>state);
    useEffect(()=>{
      dispatch(getOrderById(orderId));
    //   dispatch(updateOrderPayment({orderId,paymentId}))
    },[orderId]);

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          textAlign: 'center',
          padding: '2rem',
          borderRadius: '8px',
          backgroundColor: '#f9f9f9',
          boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
          marginTop: '4rem',
        }}
      >
        <CheckCircleOutlineIcon
          sx={{ fontSize: '4rem', color: '#4caf50', marginBottom: '1rem' }}
        />
        <Typography variant="h4" gutterBottom>
          Payment Successful!
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Thank you for your payment. Your transaction has been successfully
          processed.
        </Typography>
        <Button variant="contained" color="primary" href="/">
          Continue Shopping
        </Button>

        <Box
          sx={{
            marginTop: '2rem',
            textAlign: 'left',
          }}
        >
          <Typography variant="h6" gutterBottom>
            Your Order
          </Typography>
          <List>
            {orderData?.order?.orderItems.map((item) => (
              <React.Fragment key={item.id}>
                <CartItem item={item} />
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </Box>
      </Box>
    </Container>
  );
};

export default PaymentSuccess;
