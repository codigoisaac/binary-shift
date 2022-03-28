import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { translateToText } from './shifterSlice';
import { TextArea } from './TextArea';

export const BinaryField = () => {
  const shift = useSelector((state) => state.shifter);
  const dispatch = useDispatch();

  const translate = (e) => {
    dispatch(translateToText(e.target.value));
  };

  const filterKey = (e) => {
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

  const handlePaste = (e) => {
    const val = e.target.value;
    const filteredVal = val.split('').filter((char) => {
      return /[01 ]/.test(char);
    });
    const joined = filteredVal.join('');

    e.target.value = joined;

    translate(e);
  };

  return (
    <div>
      <TextArea
        val={shift.binary}
        onChange={handlePaste}
        onKeyPress={filterKey}
        onKeyUp={handleSpaces}
      />
    </div>
  );
};
