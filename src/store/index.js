import { combineReducers, configureStore } from "@reduxjs/toolkit";

//redux persist
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// slices
import productSlice from "./reducers/productSlice";
import cartSlice from "./reducers/cartSlice";
import commonSlice from "./reducers/commonSlice";
import addressSlice from "./reducers/addressSlice";
import commentSlice from "./reducers/commentSlice";

// persist configuration
const persistConfig = {
  key: 'root',
  storage,
}

const reducers = combineReducers({
  productSlice,
  cartSlice,
  commonSlice,
  addressSlice,
  commentSlice,
});

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
})

export const persistor = persistStore(store)