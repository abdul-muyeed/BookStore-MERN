import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice.js";
import bookApi from "./features/books/bookApi.js";
import orderApi from "./features/orders/orderApi.js";

export const store = configureStore({
  reducer: {
    [bookApi.reducerPath]: bookApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookApi.middleware, orderApi.middleware),
});
