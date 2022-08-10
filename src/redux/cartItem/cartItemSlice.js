import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import cartItemAPI from '../../api/cartItemAPI';

const initialState = {
  cartItem: [],
};

export const fetchCartItem = createAsyncThunk('cartItem', async (id) => {
  const res = await cartItemAPI.fecthCartItem(id);
  return res.data;
});

const fetchCartItemSlice = createSlice({
  name: 'cartItem',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCartItem.fulfilled, (state, action) => {
      state.customer.push(action.payload);
    });
  },
});

export default fetchCartItemSlice;
