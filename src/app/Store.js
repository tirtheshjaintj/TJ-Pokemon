import {configureStore} from '@reduxjs/toolkit';
import beerReducer from '../features/beers/beerSlice';

export const store = configureStore({
    reducer:  beerReducer
})