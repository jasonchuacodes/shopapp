import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import cartItemAPI from '../../api/cartItemAPI';

const initialState = {
  cartItem: [],
};

export const fetchCartItem = createAsyncThunk('cartItem/fetchById', 
async (id) => {
  const res = await cartItemAPI.fetchCartItem(id);
  return res.data;
});

export const addCartItem = createAsyncThunk(
  'cratItem/addItem',
  async (params) => 
  {
    const res = await cartItemAPI.addCartItem(params);
    return res.data;
  }
)

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
