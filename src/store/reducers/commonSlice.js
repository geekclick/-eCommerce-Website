import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  buttonState: true,
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    toggleState: (state, action) => {
      state.buttonState = action.payload;
    },
  },
});

export const { toggleState } = commonSlice.actions;

export default commonSlice.reducer;
