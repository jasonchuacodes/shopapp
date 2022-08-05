import { configureStore } from "@reduxjs/toolkit";
import dropdownReducer from './dropdown/dropdownSlice';

export const store = configureStore({
  reducer: {
    dropdown: dropdownReducer
  },
})