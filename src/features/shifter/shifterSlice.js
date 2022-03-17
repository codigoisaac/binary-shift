import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  text: 'Olá, React & Redux!',
  binary: '',
};

const shifterSlice = createSlice({
  name: 'shifter',
  initialState,
  reducers: {
    textInserted(state, action) {
      state.text = action.payload;
    },

    binaryInserted(state, action) {
      state.binary = action.payload;
    },
  },
});

export const { textInserted, binaryInserted } = shifterSlice.actions;

export default shifterSlice.reducer;
