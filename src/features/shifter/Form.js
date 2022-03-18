import React, { useEffect } from 'react';
import { TextField } from './TextField';
import { BinaryField } from './BinaryField';
import { useDispatch, useSelector } from 'react-redux';
import { textInserted, initialState } from './shifterSlice';

export const Form = () => {
  const dispatch = useDispatch();
  const shift = useSelector((state) => state.shifter);

  useEffect(() => {
    dispatch(textInserted(initialState.text));
  }, []);

  return (
    <div>
      <TextField />
      <BinaryField />

      <div>
        <button
          className="text-black font-bold border border-neutral-200 p-2 rounded bg-neutral-600"
          onClick={() => navigator.clipboard.writeText(shift.binary)}
        >
          Copy <small className="font-semibold">(Ctrl + B)</small>
        </button>
      </div>
    </div>
  );
};
