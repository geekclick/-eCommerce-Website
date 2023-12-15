import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  cart: [
    [
      {
        productTitle: "ولورانت پوینت ترکیه (دیجیتال کد)",
        src: "/src/assets/CartPageImages/computer.png",
        key: 0,
      },
    ],
  ],
};

const cartSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.cart.push(action.payload);
    },
    updateCart: (state, action) => {
      const updatedCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      state.cart = updatedCart;
    },
  },
});

export const { addProduct, updateCart } = cartSlice.actions;

export default cartSlice.reducer;
