import { combineReducers } from "redux";

import LoginReducer from "./LoginReducer";
import ProductReducer from "./ProductReducer";
import RegisterReducer from "./RegisterReducer";


export default combineReducers({
    LoginReducer,
    ProductReducer,
    RegisterReducer
});