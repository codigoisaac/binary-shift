import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { binaryInserted } from './shifterSlice';
import { TextArea } from './Input';

export const BinaryField = () => {
  const shift = useSelector((state) => state.shifter);
  const dispatch = useDispatch();

  const onBinaryInsert = (e) => {
    dispatch(binaryInserted(e.target.value));
  };

  const allow = (e) => {
    return e.charCode === 96 || e.charCode === 97;
  };

  return (
    <div>
      <TextArea val={shift.binary} onChange={onBinaryInsert} type="binary" />
    </div>
  );
};
