import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import customersAPI from '../../api/customersAPI';

const initialState = {
  customer: {},
};

export const fetchCustomer = createAsyncThunk('customer', async () => {
  const res = await customersAPI.fetchCustomer(2);
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
