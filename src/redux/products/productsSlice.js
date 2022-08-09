import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import productsAPI from '../../api/productsAPI';

const initialState = {
  products: [],
  count: 0,
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const res = await productsAPI.fetchProducts();
    return res.data;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    })
  },
});

export default productsSlice.reducer;
