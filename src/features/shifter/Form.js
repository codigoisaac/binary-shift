import React, { useEffect } from 'react';
import { TextField } from './TextField';
import { BinaryField } from './BinaryField';
import { useDispatch, useSelector } from 'react-redux';
import { textInserted, initialState } from './shifterSlice';
import { Button } from '../../components/Button';

export const Form = () => {
  const dispatch = useDispatch();
  const shift = useSelector((state) => state.shifter);

  useEffect(() => {
    dispatch(textInserted(initialState.text));
  }, []);

  // keyboard shortcuts
  window.addEventListener('keydown', (e) => {
    if (e.altKey) {
      if (e.key === 't') {
        copy(shift.text);
      } else if (e.key === 'b') {
        copy(shift.binary);
      }
    }
  });

  return (
    <div>
      <TextField />
      <BinaryField />

      <div className="mt-2">
        <Button
          text="Copy Text"
          keys="Alt + T"
          click={() => copy(shift.text)}
          firstOrLast
        />
        <Button
          text="Copy Binary"
          keys="Alt + B"
          click={() => copy(shift.binary)}
        />
      </div>
    </div>
  );
};

const copy = (content) => {
  console.log('copy', content);
  navigator.clipboard.writeText(content);
};
