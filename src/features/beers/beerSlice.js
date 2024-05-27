import { createSlice } from "@reduxjs/toolkit";
import fetchBeers from "../data";

const initialState = {
  beers:await fetchBeers()
};

export const beerSlice = createSlice({
  name: 'beers',
  initialState,
  reducers: {
  }
});

// export const { } = courseSlice.actions;
export default beerSlice.reducer;
