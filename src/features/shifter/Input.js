import React from 'react';

export const TextArea = ({ val, onChange }) => {
  return (
    <div>
      <textarea
        onChange={onChange}
        defaultValue={val}
        cols="80"
        rows="7"
        className="py-2 px-3 my-3 rounded bg-black text-white"
      ></textarea>
    </div>
  );
};
