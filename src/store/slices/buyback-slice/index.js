import { createSlice } from "@reduxjs/toolkit";
import {
  
  updateTokenTransactions,
} from './actions'
const transactionType = {

};
const initialState = {  
  transactions: {}
} ;

export const buybackSlice = createSlice({
  name: "Block",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(updateTokenTransactions, (state, { payload: { tokenAddress, transactions } }) => {
      state.transactions = {  transactions }
    })
  }
});

export const { setBlock } = buybackSlice.actions;

export default buybackSlice.reducer;
