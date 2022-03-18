import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  text: 'Olá Mundo.',
  binary: '',
};

const shifterSlice = createSlice({
  name: 'shifter',
  initialState,
  reducers: {
    textInserted(state, action) {
      state.text = action.payload;

      let binaryOutput = '';

      for (var i = 0; i < action.payload.length; i++) {
        binaryOutput += action.payload[i].charCodeAt(0).toString(2) + ' ';
      }

      state.binary = binaryOutput;
    },

    binaryInserted(state, action) {
      state.binary = action.payload;
    },
  },
});

export const { textInserted, binaryInserted } = shifterSlice.actions;

export default shifterSlice.reducer;