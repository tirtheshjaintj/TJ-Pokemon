import { createSlice } from "@reduxjs/toolkit";
import fetchBeers from "../data";

const beers=await fetchBeers()
const initialState = {
  beers:[]
};

export const beerSlice = createSlice({
  name: 'beers',
  initialState,
  reducers: {
    addBeers:(state,action)=>{
      state.beers=action.payload;
    }
  }
});

export const {addBeers} = beerSlice.actions;
export default beerSlice.reducer;
