import React, { useEffect } from 'react';
import { TextField } from './TextField';
import { BinaryField } from './BinaryField';
import { useDispatch } from 'react-redux';
import { textInserted, initialState } from './shifterSlice';

export const Form = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(textInserted(initialState.text));
  }, []);

  return (
    <div>
      <TextField />
      <BinaryField />
    </div>
  );
};
