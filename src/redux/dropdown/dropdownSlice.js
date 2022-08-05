import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
}

export const dropdownSlice = createSlice({
  name: 'dropdown',
  initialState,
  reducers: {
    updateIsOpen: (state) => {
      state.isOpen = !state.isOpen;
    } 
  }
})

export const {updateIsOpen} = dropdownSlice.actions

export default dropdownSlice.reducer
