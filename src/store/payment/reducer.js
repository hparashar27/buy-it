import {
  CREATE_ORDER_PAYMENT_FAILURE,
  CREATE_ORDER_PAYMENT_REQUEST,
  CREATE_ORDER_PAYMENT_SUCCESS,
  UPDATE_ORDER_PAYMENT_FAILURE,
  UPDATE_ORDER_PAYMENT_REQUEST,
  UPDATE_ORDER_PAYMENT_SUCCESS,
} from "./actionType";

const initialState = {
  paymentLink: null,
  isLoading: false,
  error: null,
};

export const PaymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER_PAYMENT_REQUEST:
    case UPDATE_ORDER_PAYMENT_REQUEST:
      return { ...state, isLoading: true, error: null };
    case CREATE_ORDER_PAYMENT_SUCCESS:
      return { ...state, paymentLink: action.payload, error: null, isLoading: false };
    case UPDATE_ORDER_PAYMENT_SUCCESS:
      return { ...state };
    case CREATE_ORDER_PAYMENT_FAILURE:
    case UPDATE_ORDER_PAYMENT_FAILURE:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return { ...state };
  }
};
