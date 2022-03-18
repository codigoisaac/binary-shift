import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { binaryInserted } from './shifterSlice';
import { TextArea } from './Input';

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
      <TextArea val={shift.binary} onChange={onBinaryInsert} />
    </div>
  );
};
