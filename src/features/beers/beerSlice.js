import { createSlice } from "@reduxjs/toolkit";

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
