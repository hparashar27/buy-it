import {
  ADD_ITEM_TO_CART_FAILURE,
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_SUCCESS,
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

const initialState = {
  cartItems: [],
  cart: null,
  isLoading: false,
  error: null,
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART_REQUEST:
    case GET_ITEM_TO_CART_REQUEST:
    case REMOVE_ITEM_TO_CART_REQUEST:
    case UPDATE_ITEM_TO_CART_REQUEST:
      return { ...state, isLoading: true, error: null };
    
    case ADD_ITEM_TO_CART_SUCCESS:
      return { 
        ...state, 
        isLoading: false, 
        cartItems: [...state.cartItems, ...action.payload.cartItems], // Spreading items into array
        cart: action.payload  // Corrected from cartcart to cart
      };
    
    case GET_ITEM_TO_CART_SUCCESS:
      return { 
        ...state, 
        isLoading: false, 
        cart:action.payload,
        cartItems:action.payload.cartItems
      };
    
    case REMOVE_ITEM_TO_CART_SUCCESS:
      return { 
        ...state, 
        isLoading: false, 
        deleteCartItem:action.payload 
      };
    
    case UPDATE_ITEM_TO_CART_SUCCESS:
      return { 
        ...state, 
        isLoading: false, 
        updateCartItem:action.payload 
      };
    
    case ADD_ITEM_TO_CART_FAILURE:
    case GET_ITEM_TO_CART_FAILURE:
    case REMOVE_ITEM_TO_CART_FAILURE:
    case UPDATE_ITEM_TO_CART_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    
    default:
      return state; // Change this to state to preserve existing state
  }
};


export default CartReducer