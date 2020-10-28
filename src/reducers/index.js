import { combineReducers } from "redux";

import ProductReducer from "./ProductReducer";
import RegisterReducer from "./RegisterReducer";


export default combineReducers({
    ProductReducer,
    RegisterReducer
});