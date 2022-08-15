import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import customersAPI from '../../api/customersAPI';

const initialState = {
  customer: {},
};

export const fetchCustomer = createAsyncThunk('customer', 
  async (id) => {
  const res = await customersAPI.fetchCustomer(id);
  return res.data;
});

// export const registerCustomer = createAsyncThunk(
//   'customer/register', 
//   async (params) => {
//     const res = await customersAPI.registerCustomer(params);
//     return res.data;
// });

export const registerCustomer = createAsyncThunk('customer/register', 
  async (params) => {
  const res = await customersAPI.registerCustomer(params);
  return res.data;
});

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCustomer.fulfilled, (state, action) => {
      state.customer.push(action.payload);
    });
  },
});

export default customerSlice;
