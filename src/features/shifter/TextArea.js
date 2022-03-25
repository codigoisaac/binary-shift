import React from 'react';

export const TextArea = ({ val, onChange, onKeyPress, onKeyUp }) => {
  return (
    <div>
      <textarea
        onChange={onChange}
        onKeyPress={onKeyPress}
        onKeyUp={onKeyUp}
        value={val}
        rows="7"
        className="py-2 px-3 m-0 rounded bg-black text-white w-full"
      ></textarea>
    </div>
  );
};
