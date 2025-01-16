import { createSlice } from '@reduxjs/toolkit'
import Swal from 'sweetalert2'

const initialState = {
  cartItems: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
        const existingCartItem = state.cartItems.find(
            (cartItem) => cartItem._id === action.payload._id
        );  
        if (existingCartItem) {
            Swal.fire("Product already in cart!");
        } else {
            state.cartItems.push({ ...action.payload});
            Swal.fire("Product added to cart!");
        }
      
    },
    removeFromCart: (state, action) => {
        state.cartItems = state.cartItems.filter(
            (cartItem) => cartItem._id !== action.payload._id
        );
    },
    clearCart: (state) => {
        state.cartItems = [];
    }

  },
})

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions

export default cartSlice.reducer