import axios from "axios";
import {
  CREATE_CART_FOR_USER_FAILURE,
  CREATE_CART_FOR_USER_REQUEST,
    CREATE_CART_FOR_USER_SUCCESS,
    GET_USER_FAILURE,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT,
    REGISTER_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
  } from "./ActionType";
import { API_BASE_URL } from "../../config/apiConfig";
import { type } from "@testing-library/user-event/dist/type";

// REGISTER

export const register_request = () => {
  return {
    type: REGISTER_REQUEST,
  };
};

export const register_success = (payload) => {
  return {
    type: REGISTER_SUCCESS,
    payload: payload,
  };
};

export const register_failure = (payload) => {
  return {
    type: REGISTER_FAILURE,
    payload: payload,
  };
};


export const register = (userData) => async (dispatch) => {
  dispatch(register_request());
  try {
    const request = await axios.post(`${API_BASE_URL}/auth/signup/`, userData);
    const user = request.data;
    console.log(user)

    if (user.jwt) {
      localStorage.setItem("jwt", user.jwt);
    }
    console.log('user :',user);
    dispatch(register_success(user.jwt));
  } catch (error) {
    dispatch(register_failure(error.message));
  }
};

// login method

export const login_request = () => {
    return {
      type: LOGIN_REQUEST,
    };
  };
  
  export const login_success = (payload) => {
    return {
      type: LOGIN_SUCCESS,
      payload: payload,
    };
  };
  
  export const login_failure = (payload) => {
    return {
      type: LOGIN_FAILURE,
      payload: payload,
    };
  };


export const login = (userData) => async(dispatch) => {
  dispatch(login_request());
  try {
    console.log(userData)
    const request = await axios.post(`${API_BASE_URL}/auth/signin`, userData);
    const user = request.data;
    console.log('user :',user);
    if (user.jwt) {
      localStorage.setItem("jwt", user.jwt);
    }
    dispatch(login_success(user.jwt));
  } catch (error) {
    dispatch(login_failure(error.message));
  }
};

// get user data

export const get_user_request = () => {
    return {
      type: GET_USER_REQUEST,
    };
  };
  
  export const get_user_success = (payload) => {
    return {
      type: GET_USER_SUCCESS,
      payload: payload,
    };
  };
  
  export const get_user_failure = (payload) => {
    return {
      type: GET_USER_FAILURE,
      payload: payload,
    };
  };

export const getUser = (jwt) => async(dispatch) => {
  dispatch(get_user_request());
  try {
    const response = await axios.get(`${API_BASE_URL}/api/users/profile`,{
        headers:{
            "Authorization" : `Bearer ${jwt}`
        }
    });
    const user = response.data;
    console.log('user :',user);
    dispatch(get_user_success(user));
  } catch (error) {
    dispatch(get_user_failure(error.message));
  }
};

//LOGOUT 

export const log_out = () =>{
    return{
        type:LOGOUT,
        payload:null,
    }
}

export const logout = () => async(dispatch) =>{
    dispatch(log_out());
    localStorage.clear()
}