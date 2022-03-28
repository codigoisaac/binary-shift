import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  text: 'Olá Mundo.',
  binary: '',
};

const shifterSlice = createSlice({
  name: 'shifter',
  initialState,
  reducers: {
    translateToBinary(state, action) {
      state.text = action.payload;

      let binaryOutput = '';

      action.payload.split('').map((character) => {
        binaryOutput +=
          character.charCodeAt(0).toString(2).padStart(8, '0') + ' ';
        return '';
      });

      state.binary = binaryOutput;
    },

    translateToText(state, action) {
      state.binary = action.payload;

      var textOutput = '';

      action.payload.split(' ').map((byte) => {
        textOutput += String.fromCharCode(parseInt(byte, 2));
        return '';
      });

      state.text = textOutput;
    },
  },
});

export const { translateToBinary, translateToText } = shifterSlice.actions;

export default shifterSlice.reducer;
