import React from 'react';

export const TextArea = ({ val, onChange }) => {
  return (
    <div>
      <textarea
        onChange={onChange}
        defaultValue={val}
        rows="7"
        className="py-2 px-3 m-0 rounded bg-black text-white w-full"
      ></textarea>
    </div>
  );
};
