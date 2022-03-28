import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { translateToBinary } from './shifterSlice';
import { TextArea } from '../components/TextArea';

export const TextField = () => {
  const shift = useSelector((state) => state.shifter);
  const dispatch = useDispatch();

  const translate = (e) => {
    dispatch(translateToBinary(e.target.value));
  };

  return (
    <div>
      <TextArea val={shift.text} onChange={translate} />
    </div>
  );
};
