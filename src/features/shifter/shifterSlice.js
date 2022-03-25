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
        binaryOutput +=
          action.payload[i].charCodeAt(0).toString(2).padStart(8, '0') + ' ';
      }

      state.binary = binaryOutput;
    },

    binaryInserted(state, action) {
      state.binary = action.payload;

      var textOutput = '';

      action.payload.split(' ').map(function (bin) {
        textOutput += String.fromCharCode(parseInt(bin, 2));
      });

      state.text = textOutput;
    },
  },
});

export const { textInserted, binaryInserted } = shifterSlice.actions;

export default shifterSlice.reducer;
