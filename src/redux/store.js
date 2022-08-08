import { configureStore } from "@reduxjs/toolkit";
import dropdownReducer from './dropdown/dropdownSlice';
import shopReducer from './shop/shopSlice';
import productsReducer from './products/productsSlice';

export const store = configureStore({
  reducer: {
    dropdown: dropdownReducer,
    products: productsReducer,
    shop: shopReducer,
  },
})