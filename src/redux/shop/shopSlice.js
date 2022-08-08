import { createSlice } from '@reduxjs/toolkit';

const initialState = {products: []};

export const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {},
});

export default shopSlice.reducer;
