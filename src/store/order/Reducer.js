
import {
  CREATE_ORDER_FAILURE,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  GET_ORDER_BY_ID_FAILURE,
  GET_ORDER_BY_ID_REQUEST,
  GET_ORDER_BY_ID_SUCCESS,
} from "./ActionTypes";

const initialState = {
  order: null,
  error: null,
  isLoading: false,
};

const OrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
    case GET_ORDER_BY_ID_REQUEST:
      return { ...state, error: null, isLoading: true };
    case CREATE_ORDER_SUCCESS:
      return { ...state, orders: action.payload, isLoading: false };
    case GET_ORDER_BY_ID_SUCCESS:
      return { ...state, order: action.payload, isLoading: false };
    case CREATE_ORDER_FAILURE:
    case GET_ORDER_BY_ID_FAILURE:
      return { ...state, error: action.payload, isLoading: false };
    default:
    return {...state}
  }
};

export default OrderReducer;
