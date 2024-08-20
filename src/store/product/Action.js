import { api } from "../../config/apiConfig";
import {
  FIND_PRODUCT_BY_ID_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
  FIND_PRODUCT_FAILURE,
  FIND_PRODUCT_REQUEST,
  FIND_PRODUCT_SUCCESS,
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
    console.log("findProductById ----------------- :", data);
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
    sizes,
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
    const { data } = await api.get(
      `/api/products`
      // 
    );
    console.log("findProducts :",data);
    console.log("findProducts :",data);
    console.log("findProducts :",data);
    console.log("findProducts :",data);
    console.log("findProducts :",data);
    dispatch(find_product_success(data));
  } catch (error) {
    dispatch(find_product_failure(error.message));
  }
};
// export const
