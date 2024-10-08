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

const initialState = {
  allProducts: [],
  products:null,
  isLoading: false,
  error: null,
  product:null
};

const CustomerProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_PRODUCT_REQUEST:
    case FIND_PRODUCT_BY_ID_REQUEST:
    case GET_PRODUCTS_REQUEST:
      return { ...state, error: null, isLoading: true };

    case FIND_PRODUCT_BY_ID_SUCCESS:
      return { ...state, product: action.payload, error: null, isLoading: false };

    case FIND_PRODUCT_SUCCESS:
      return { ...state, allProducts: action.payload, error: null, isLoading: false };

    case GET_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload, error: null, isLoading: false };

    case FIND_PRODUCT_FAILURE:
    case FIND_PRODUCT_BY_ID_FAILURE:
    case GET_PRODUCTS_FAILURE:
      return { ...state, error: action.payload, isLoading: false };

    default:
      return state;
  }
};


export default CustomerProductReducer ;