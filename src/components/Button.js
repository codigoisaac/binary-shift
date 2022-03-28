import React from 'react';

export const Button = ({ text, keys, click }) => {
  return (
    <button
      className={`text-neutral-700 font-bold border border-neutral-700 p-0 w-full hover:bg-neutral-300`}
      onClick={click}
    >
      {text} <small className="font-semibold hidden sm:inline">({keys})</small>
    </button>
  );
};
