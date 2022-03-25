import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { binaryInserted } from './shifterSlice';
import { TextArea } from './TextArea';

export const BinaryField = () => {
  const shift = useSelector((state) => state.shifter);
  const dispatch = useDispatch();

  const onBinaryInsert = (e) => {
    dispatch(binaryInserted(e.target.value));
  };

  const filterInput = (e) => {
    const key = e.key;
    const regex = /[01]/;

    if (!regex.test(key)) {
      e.preventDefault();
    }
  };

  const handleSpaces = (e) => {
    const joined = e.target.value.split(' ').join('');
    e.target.value = joined.match(/.{1,8}/g).join(' ');
  };

  return (
    <div>
      <TextArea
        val={shift.binary}
        onChange={onBinaryInsert}
        onKeyPress={filterInput}
        onKeyUp={handleSpaces}
      />
    </div>
  );
};
