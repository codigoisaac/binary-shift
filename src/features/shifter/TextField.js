import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { textInserted } from './shifterSlice';
import { TextArea } from './Input';

export const TextField = () => {
  const shift = useSelector((state) => state.shifter);
  const dispatch = useDispatch();

  const onTextInsert = (e) => {
    dispatch(textInserted(e.target.value));
  };

  return (
    <div>
      <TextArea val={shift.text} onChange={onTextInsert} />
    </div>
  );
};
