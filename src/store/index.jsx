import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/productSlice";
import cartSlice from "./reducers/cartSlice";
import commonSlice from "./reducers/commonSlice";
import addressSlice from "./reducers/addressSlice";

const reducers = combineReducers({
  productSlice,
  cartSlice,
  commonSlice,
  addressSlice,
});

const store = configureStore({
  reducer: reducers,
});

export default store;
