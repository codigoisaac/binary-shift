import React from 'react';

export const TextArea = ({ val, onChange, type }) => {
  const handleKeyPress = (e) => {
    if (type === 'binary') {
      const key = e.key;
      const regex = /[01]/;

      if (!regex.test(key)) {
        e.preventDefault();
      }
    }
  };

  return (
    <div>
      <textarea
        onChange={onChange}
        defaultValue={val}
        rows="7"
        className="py-2 px-3 m-0 rounded bg-black text-white w-full"
        onKeyPress={(e) => handleKeyPress(e)}
      ></textarea>
    </div>
  );
};
