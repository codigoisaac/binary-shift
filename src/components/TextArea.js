import React from 'react';

export const TextArea = ({ val, onChange, onKeyUp }) => {
  return (
    <div>
      <textarea
        onChange={onChange}
        onKeyUp={onKeyUp}
        value={val}
        className="py-2 px-3 m-0 rounded bg-black text-white w-full"
        rows={5}
      ></textarea>
    </div>
  );
};
