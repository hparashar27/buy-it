import { api } from "../../config/apiConfig";
import {
  CREATE_ORDER_FAILURE,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  GET_ORDER_BY_ID_FAILURE,
  GET_ORDER_BY_ID_REQUEST,
  GET_ORDER_BY_ID_SUCCESS,
  GET_ORDER_HISTORT_FAILURE,
  GET_ORDER_HISTORT_REQUEST,
  GET_ORDER_HISTORT_SUCCESS,
} from "./ActionTypes";

// CREATE ORDER

export const create_order_request = () => {
  return {
    type: CREATE_ORDER_REQUEST,
  };
};
export const create_order_success = (payload) => {
  return {
    type: CREATE_ORDER_SUCCESS,
    payload: payload,
  };
};
export const create_order_failure = (payload) => {
  return {
    type: CREATE_ORDER_FAILURE,
    payload: payload,
  };
};

export const createOrder = (reqData) => async (dispatch) => {
  dispatch(create_order_request());
  try {
    const response = await api.post(`/api/orders/`, reqData.userData);
    const data = response.data;
    if (data.orderItems && data.orderItems.length > 0 && data._id) {
      reqData.navigate({ search: `step=3&order_id=${data._id}` });
    }
    dispatch(create_order_success(data));
  } catch (error) {
    dispatch(create_order_failure(error.message));
  }
};


// GET ORDER BY ID

export const get_order_by_id_request = () => {
  return {
    type: GET_ORDER_BY_ID_REQUEST,
  };
};
export const get_order_by_id_success = (payload) => {
  return {
    type: GET_ORDER_BY_ID_SUCCESS,
    payload: payload,
  };
};
export const get_order_by_id_failure = (payload) => {
  return {
    type: GET_ORDER_BY_ID_FAILURE,
    payload: payload,
  };
};

export const getOrderById = (orderId) => async (dispatch) => {
  dispatch(get_order_by_id_request());
  try {
    const response  = await api.get(`/api/orders/${orderId}`);
    // console.log("getOrderById====================",response.data);
    dispatch(get_order_by_id_success(response.data));
  } catch (error) {
    dispatch(get_order_by_id_failure(error.message));
  }
};

// GET ORDER HISTORY

// export const get_order_history_request = ()=>{
//     return{
//         type:GET_ORDER_HISTORT_REQUEST,
//     }
// }
// export const get_order_history_success = (payload)=>{
//     return{
//         type:GET_ORDER_HISTORT_SUCCESS,
//         payload:payload
//     }
// }
// export const get_order_history_failure = (payload)=>{
//     return{
//         type:GET_ORDER_HISTORT_FAILURE,
//         payload:payload
//     }
// }

// export const getOrderHistory = (reqData) => async(dispatch) =>{
//     dispatch(get_order_history_request());
//     try{
//     const {data} = api.get(`/api/orders/${reqData.user}`);
//     dispatch(get_order_history_success(data));
//     }catch(error){
// dispatch(get_order_history_failure(error.message));
//     }
// }
