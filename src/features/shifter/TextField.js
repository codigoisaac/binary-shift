import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { textInserted } from './shifterSlice';

export const TextField = () => {
  const shift = useSelector((state) => state.shifter);
  const dispatch = useDispatch();

  const onTextInsert = (e) => {
    dispatch(
      textInserted({
        text: e.target.value,
      })
    );
  };

  return (
    <div>
      <textarea
        onChange={onTextInsert}
        defaultValue={shift.text}
        cols="80"
      ></textarea>
    </div>
  );
};
