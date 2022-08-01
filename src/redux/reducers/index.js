import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReduser";

const reducers = combineReducers({
  allproducts: productReducer,
  product: selectedProductReducer,
});

export default reducers;
