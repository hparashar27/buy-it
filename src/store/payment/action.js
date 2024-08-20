import { api } from "../../config/apiConfig"
import {
    CREATE_ORDER_PAYMENT_FAILURE,
    CREATE_ORDER_PAYMENT_REQUEST,
    CREATE_ORDER_PAYMENT_SUCCESS,
    UPDATE_ORDER_PAYMENT_FAILURE,
    UPDATE_ORDER_PAYMENT_REQUEST,
    UPDATE_ORDER_PAYMENT_SUCCESS
} from "./actionType"

export const create_order_payment_request = () => {
    return {
        type: CREATE_ORDER_PAYMENT_REQUEST,
    }
}

export const create_order_payment_failure = (error) => {
    return {
        type: CREATE_ORDER_PAYMENT_FAILURE,
        payload: error,
    }
}

export const create_order_payment_success = (payload) => {
    return {
        type: CREATE_ORDER_PAYMENT_SUCCESS,
        payload: payload,
    }
}

export const createOrderPayment = (orderId) => async (dispatch) => {
    dispatch(create_order_payment_request());
    try {
        const { data: request } = await api.post(`/api/payments/${orderId}`, {});
        if (request.payment_link_url) {
            window.location.href = request.payment_link_url;
        }
        console.log("created order payment - ", request);
        dispatch(create_order_payment_success(request));
    } catch (error) {
        dispatch(create_order_payment_failure(error.message));
    }
}

// export const update_order_payment_request = async()=>{
//     return{
//     type:UPDATE_ORDER_PAYMENT_REQUEST
//     }
// }

// export const update_order_payment_failure = async(error)=>{
//     return{
//     type:UPDATE_ORDER_PAYMENT_FAILURE,
//     payload:error
//     }
// }
// export const update_order_payment_success = async(payload)=>{
//     return{
//     type:UPDATE_ORDER_PAYMENT_SUCCESS,
//     payload:payload
//     }
// }

// export const updateOrderPayment = () => async (dispatch) => {
//     dispatch(update_order_payment_request());
//     try {
//        const { data } = await api.put(`/api/payments/${orderId}`, { status: 'updated' });
//         dispatch(update_order_payment_success(data));
//     } catch (error) {
//         dispatch(update_order_payment_failure(error.message));
//     }
// }