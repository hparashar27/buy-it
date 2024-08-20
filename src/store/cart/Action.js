import { api } from "../../config/apiConfig";
import {
  ADD_ITEM_TO_CART_FAILURE,
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_SUCCESS,

  // CREATE_CART_FOR_USER_FAILURE,

  // CREATE_CART_FOR_USER_REQUEST,

  // CREATE_CART_FOR_USER_SUCCESS,

  GET_ITEM_TO_CART_FAILURE,
  GET_ITEM_TO_CART_REQUEST,
  GET_ITEM_TO_CART_SUCCESS,

  REMOVE_ITEM_TO_CART_FAILURE,
  REMOVE_ITEM_TO_CART_REQUEST,
  REMOVE_ITEM_TO_CART_SUCCESS,

  UPDATE_ITEM_TO_CART_FAILURE,
  UPDATE_ITEM_TO_CART_REQUEST,
  UPDATE_ITEM_TO_CART_SUCCESS,
} from "./ActionTypes";

// CREATE A CART 

// export const create_cart_for_user_request = () =>{
//   return {
//     type:CREATE_CART_FOR_USER_REQUEST,
//   }
//   }
  
//   export const create_cart_for_user_success = (data) =>{
//   return{
//     type:CREATE_CART_FOR_USER_SUCCESS,
//     payload:data
//   }
//   }
  
//   export const create_cart_for_user_failure = (payload) =>{
//     return{
//       type:CREATE_CART_FOR_USER_FAILURE,
//       payload:payload
//     }
//   }

// ADD ITEM TO CART
export const add_item_to_cart_request = () => {
  return {
    type: ADD_ITEM_TO_CART_REQUEST,
  };
};
export const add_item_to_cart_success = (payload) => {
  return {
    type: ADD_ITEM_TO_CART_SUCCESS,
    payload:payload
  };
};
export const add_item_to_cart_failure = (payload) => {
  return {
    type: ADD_ITEM_TO_CART_FAILURE,
    payload:payload
  };
};

// export const createCartForUser = (reqData) => async(dispatch) =>{
//   console.log("reqData for the cart",reqData)
//   dispatch(create_cart_for_user_request());
//   try{
//   const item = await api.post(`/api/cart/create`,{reqData});
//   console.log(item,"created a cart for the user-------------------");  
//   dispatch(create_cart_for_user_success(item));
//   }catch(error){
//     dispatch(create_cart_for_user_failure(error.message))
//   }
// } 

export const addItemToCart = (reqData) => async(dispatch)=>{
  console.log("cart data",reqData)
    dispatch(add_item_to_cart_request());
try{
const item = await api.put(`/api/cart/add`,reqData);
console.log("addItemToCart-------",item);
dispatch(add_item_to_cart_success(item.data));
}catch(error){
dispatch(add_item_to_cart_failure(error.message));
}
}

// GET ITEM FROM CART
export const get_item_to_cart_request = () => {
  return {
    type: GET_ITEM_TO_CART_REQUEST,
  };
};
export const get_item_to_cart_success = (payload) => {
  return {
    type: GET_ITEM_TO_CART_SUCCESS,
    payload:payload
  };
};
export const get_item_to_cart_failure = (payload) => {
  return {
    type: GET_ITEM_TO_CART_FAILURE,
    payload:payload
  };
};

export const getItemToCart = () => async(dispatch)=>{
dispatch(get_item_to_cart_request());
try{
const item = await api.get(`/api/cart/`);
dispatch(get_item_to_cart_success(item.data));
console.log("------------------------------------------getItemToCart---------------------------------------------------------------",item.data);
}catch(error){
dispatch(get_item_to_cart_failure(error.message));
}
}

// REMOVE ITEM TO CART
export const remove_item_to_cart_request = () => {
  return {
    type: REMOVE_ITEM_TO_CART_REQUEST,
  };
};
export const remove_item_to_cart_success = (payload) => {
  return {
    type: REMOVE_ITEM_TO_CART_SUCCESS,
    payload:payload
  };
};
export const remove_item_to_cart_failure = (payload) => {
  return {
    type: REMOVE_ITEM_TO_CART_FAILURE,
    payload:payload
  };
};

export const removeItemToCart = (reqData) => async(dispatch)=>{
    dispatch(remove_item_to_cart_request());
    try{
    const item= await api.delete(`/api/cart_items/${reqData}`);
    console.log("removeItemToCart",item);
    dispatch(remove_item_to_cart_success(item));
    }catch(error){
    dispatch(remove_item_to_cart_failure(error.message));
    }
}

// UPDATE ITEM TO CART
export const update_item_to_cart_request = () => {
  return {
    type: UPDATE_ITEM_TO_CART_REQUEST,
  };
};
export const update_item_to_cart_success = (payload) => {
  return {
    type: UPDATE_ITEM_TO_CART_SUCCESS,
    payload:payload
  };
};
export const update_item_to_cart_failure = (payload) => {
  return {
    type: UPDATE_ITEM_TO_CART_FAILURE,
    payload:payload
  };
};

export const updateItemToCart = (reqData) => async(dispatch)=>{
    dispatch(update_item_to_cart_request());
    try{
    const item= await api.put(`/api/cart_items/${reqData.cartItemId}`,reqData.data);
    console.log("updateItemToCart",item);
    dispatch(update_item_to_cart_success(item));
    }catch(error){
    dispatch(update_item_to_cart_failure(error.message));
    }
}