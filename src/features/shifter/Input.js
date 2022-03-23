import React from 'react';

export const TextArea = ({ val, onChange, type }) => {
  const handleInput = (e) => {
    if (type === 'binary') {
      const key = e.key;
      const regex = /[01]/;

      if (!regex.test(key)) {
        e.preventDefault();
      }
    }
  };

  const handleSpaces = (e) => {
    if (type === 'binary') {
      const joined = e.target.value.split(' ').join('');
      e.target.value = joined.match(/.{1,8}/g).join(' ');
    }
  };

  return (
    <div>
      <textarea
        onChange={onChange}
        defaultValue={val}
        rows="7"
        className="py-2 px-3 m-0 rounded bg-black text-white w-full"
        onKeyPress={(e) => handleInput(e)}
        onKeyUp={(e) => handleSpaces(e)}
      ></textarea>
    </div>
  );
};
