import { configureStore } from '@reduxjs/toolkit';
import { mainReducer } from './contactSlice';
const store = configureStore({
    reducer: mainReducer,
  });
  
export default store;