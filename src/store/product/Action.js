import { api } from "../../config/apiConfig";
import { GET_USER_SUCCESS } from "../auth/ActionType";
import {
  FIND_PRODUCT_BY_ID_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
  FIND_PRODUCT_FAILURE,
  FIND_PRODUCT_REQUEST,
  FIND_PRODUCT_SUCCESS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from "./ActionType";

export const find_product_by_id_request = () => {
  return {
    type: FIND_PRODUCT_BY_ID_REQUEST,
  };
};

export const find_product_by_id_success = (payload) => {
  return {
    type: FIND_PRODUCT_BY_ID_SUCCESS,
    payload: payload,
  };
};

export const find_product_by_id_failure = (payload) => {
  return {
    type: FIND_PRODUCT_BY_ID_FAILURE,
    payload: payload,
  };
};

export const findProductsById = (productId) => async (dispatch) => {
  dispatch(find_product_by_id_request());
  try {
    const { data } = await api.get(`/api/admin/products/${productId}`);
    dispatch(find_product_by_id_success(data));
    // console.log("findProductById ----------------- :", data);
  } catch (error) {
    dispatch(find_product_by_id_failure(error.message));
  }
};

export const find_product_request = () => {
  return {
    type: FIND_PRODUCT_REQUEST,
  };
};

export const find_product_success = (payload) => {
  return {
    type: FIND_PRODUCT_SUCCESS,
    payload: payload,
  };
};

export const find_product_failure = (payload) => {
  return {
    type: FIND_PRODUCT_FAILURE,
    payload: payload,
  };
};

export const findProducts = (reqData) => async (dispatch) => {
  const {
    title ,
    description,
    category,
    color,
    size,
    minPrice,
    maxPrice,
    discountedPercent,
    sort,
    stock,
    pageNumber = 1,
    pageSize = 10,
  } = reqData;
  dispatch(find_product_request());
  try {
    // console.log(discountedPercent,"---------------------------discount--------------value")
    const { data } = await api.get(`/api/products?color=${color}&discountedPercent=${discountedPercent}&minPrice=${minPrice}&maxPrice=${maxPrice}`)
    
    // console.log("findProducts :",data);
    // console.log("findProducts :",data);
    // console.log("findProducts :",data);
    // console.log("findProducts :",data);
    // console.log("findProducts :",data);
    dispatch(find_product_success(data));
  } catch (error) {
    dispatch(find_product_failure(error.message));
  }
};

const get_product_request = () =>{
return {
  type:GET_PRODUCTS_REQUEST,
}
}

const get_product_success = (products) =>{
  return {
    type:GET_PRODUCTS_SUCCESS,
    payload:products
  }
}

const get_product_failure = (error) => {
  return{
    type:GET_PRODUCTS_FAILURE,
    payload:error
  }
}

export const getProducts = () => async(dispatch) =>{
   dispatch(get_product_request());
  try{
const {data} = await api.get("/api/products/products");
const products = data;
  dispatch(get_product_success(products));
  // console.log("All Products ----------------- :",products);
  }catch(error){
dispatch(get_product_failure(error.message));
  }
}
