import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  address: {},
  addressList: [
    {
      id: 0,
      firstName: "محمد محمدی",
      lastName: "محمد محمدی",
      phoneNumber: "09312345678",
      state: "state",
      postalCode: "postalCode",
      city: "city",
      description:
        "شرح آدرس لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون ا",
    },
  ],
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    addAddress: (state, action) => {
      state.addressList.push(action.payload);
    },
    updateAddressList: (state, action) => {
      const updatedList = state.addressList.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });

      return { ...state, addressList: updatedList };
    },
    removeAddress: (state, action) => {
      const updatedList = state.addressList.filter(
        (item) => item.phoneNumber !== action.payload.phoneNumber
      );
      state.addressList = updatedList;
    },
  },
});

export const { setAddress, addAddress, updateAddressList, removeAddress } =
  addressSlice.actions;

export default addressSlice.reducer;
