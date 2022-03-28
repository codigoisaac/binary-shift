import { configureStore } from '@reduxjs/toolkit';
import shifterReducer from './shifter/shifterSlice';

export const store = configureStore({
  reducer: {
    shifter: shifterReducer,
  },
});
