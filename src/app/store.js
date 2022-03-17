import { configureStore } from '@reduxjs/toolkit';
import shifterReducer from '../features/shifter/shifterSlice';

export const store = configureStore({
  reducer: {
    shifter: shifterReducer,
  },
});
