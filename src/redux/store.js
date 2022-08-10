import { configureStore } from "@reduxjs/toolkit";
import dropdownReducer from './dropdown/dropdownSlice';
import productsReducer from './products/productsSlice';

export const store = configureStore({
  reducer: {
    dropdown: dropdownReducer,
    products: productsReducer,
  },
})