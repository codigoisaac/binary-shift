import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';

export const TextArea = ({ val, onChange, onKeyUp }) => {
  return (
    <div>
      <TextareaAutosize
        onChange={onChange}
        onKeyUp={onKeyUp}
        value={val}
        className="py-2 px-3 m-0 rounded bg-black text-white w-full"
        maxRows={13}
        minRows={1}
      />
    </div>
  );
};
