import React, { useEffect } from 'react';
import { TextField } from './TextField';
import { BinaryField } from './BinaryField';
import { useDispatch, useSelector } from 'react-redux';
import { translateToBinary, initialState } from './shifterSlice';
import { Button } from '../../components/Button';

export const Form = () => {
  const dispatch = useDispatch();
  const shift = useSelector((state) => state.shifter);

  useEffect(() => {
    dispatch(translateToBinary(initialState.text));
    //eslint-disable-next-line
  }, []);

  // keyboard shortcuts
  window.addEventListener('keydown', (e) => {
    if (e.altKey) {
      if (e.key === 'z') {
        copy(shift.text);
      } else if (e.key === 'x') {
        copy(shift.binary);
      }
    }
  });

  return (
    <div>
      <TextField />

      <div className="flex items-center mb-1">
        <div className="w-full">
          <Button
            text="Copy Text"
            keys="Alt + Z"
            click={() => copy(shift.text)}
          />
        </div>

        <div className="w-full">
          <Button
            text="Copy Binary"
            keys="Alt + X"
            click={() => copy(shift.binary)}
          />
        </div>
      </div>

      <BinaryField />
    </div>
  );
};

const copy = (content) => {
  navigator.clipboard.writeText(content);
};
