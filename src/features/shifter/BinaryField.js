import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { translateToText } from './shifterSlice';
import { TextArea } from '../../components/TextArea';

export const BinaryField = () => {
  const shift = useSelector((state) => state.shifter);
  const dispatch = useDispatch();

  const translate = (e) => {
    dispatch(translateToText(e.target.value));
  };

  const handleSpaces = (e) => {
    const val = e.target.value;

    if (val) {
      const joined = val.split(' ').join('');
      e.target.value = joined.match(/.{1,8}/g).join(' ');
    }

    translate(e);
  };

  const handleInput = (e) => {
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
        onChange={handleInput}
        onKeyUp={handleSpaces}
      />
    </div>
  );
};
