import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems")).reduce(
        (acc, curr) => acc + curr.quantity,
        0
      )
    : 0,
  cartTotalAmount: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems")).reduce(
        (acc, curr) => acc + curr.price * curr.quantity,
        0
      )
    : 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.name === action.payload.name
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      } else {
        state.cartItems.push(action.payload);
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
