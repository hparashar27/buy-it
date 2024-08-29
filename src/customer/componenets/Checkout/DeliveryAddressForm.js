import React from 'react';
import AddressCard from '../AddressCard/AddressCard';
import { Grid, TextField, Box } from '@mui/material';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../../../store/order/Action';
import { useNavigate, useSearchParams } from 'react-router-dom';

const DeliveryAddressForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector(state=>state.AuthReducer);
    const submitHandler = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const userData = {
            firstName: data.get('firstname'),
            lastName: data.get('LastName'),
            streetAddress: data.get('streetAddress'),
            city: data.get('City'),
            state: data.get('State'),
            pinCode: data.get('pinCode'),
            mobile: data.get('mobile')
        };
        
        const orderData = {userData,navigate}
        dispatch(createOrder(orderData))
    };
    // console.log(userData.user);

    
   

    return (
        <div>
            <Grid spacing={4} container>
                <Grid xs={12} lg={5} className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll">
                <div className="p-5 py-10 border-b cursor-pointer">
                    {userData?.user?.address.map((item)=><AddressCard address={item}/>)}
                        <Button sx={{ mt: 2, bgcolor: 'purple' }} size="large" variant="contained">
                            Deliver Here
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={7}>
                    <Box className="border rounded-s-md shadow-md p-5">
                        <form onSubmit={submitHandler}>
                            <Grid spacing={3} container>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="firstname"
                                        name="firstname"
                                        label="First Name"
                                        fullWidth
                                        autoComplete="given-name"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="LastName"
                                        name="LastName"
                                        label="Last Name"
                                        fullWidth
                                        autoComplete="family-name"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id="streetAddress"
                                        name="streetAddress"
                                        label="streetAddress"
                                        fullWidth
                                        autoComplete="street-address"
                                        multiline
                                        rows={6}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="City"
                                        name="City"
                                        label="City"
                                        fullWidth
                                        autoComplete="address-level2"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="State"
                                        name="State"
                                        label="State/Region"
                                        fullWidth
                                        autoComplete="address-level1"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="pinCode"
                                        name="pinCode"
                                        label="pin Code"
                                        fullWidth
                                        autoComplete="postal-code"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="mobile"
                                        name="mobile"
                                        label="Phone Number"
                                        fullWidth
                                        autoComplete="tel"
                                    />
                                </Grid>
                                <Grid xs={12} sm={6}>
                                <Box display="flex" justifyContent="center">
                                        <Button type="submit" sx={{ py: 2, mt: 2, bgcolor: 'purple' }} size="large" variant="contained">
                                            Deliver Here
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default DeliveryAddressForm;
