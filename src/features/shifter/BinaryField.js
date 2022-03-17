import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { binaryInserted } from './shifterSlice';

export const BinaryField = () => {
  const shift = useSelector((state) => state.shifter);
  const dispatch = useDispatch();

  const onBinaryInsert = (e) => {
    dispatch(
      binaryInserted({
        binary: e.target.value,
      })
    );
  };

  return (
    <div>
      <textarea
        onChange={onBinaryInsert}
        defaultValue={shift.input}
        cols="80"
      ></textarea>
    </div>
  );
};
