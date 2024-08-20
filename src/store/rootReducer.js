import { combineReducers } from "redux";
import AuthReducer from "./auth/Reducer";
import CustomerProductReducer from "./product/Reducer";
import CartReducer from "./cart/Reducer";
import OrderReducer from "./order/Reducer";
import { PaymentReducer } from "./payment/reducer";

export const rootReducer = combineReducers({
AuthReducer:AuthReducer,
CustomerProductReducer:CustomerProductReducer,
CartReducer:CartReducer,
OrderReducer:OrderReducer,
PaymentReducer:PaymentReducer
});