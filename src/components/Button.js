import React from 'react';

export const Button = ({ text, keys, click, firstOrLast }) => {
  return (
    <button
      className={`text-black font-bold border border-neutral-200 p-2 rounded bg-neutral-600 ${
        firstOrLast ? 'mx-0' : 'mx-2'
      }`}
      onClick={click}
    >
      {text} <small className="font-semibold">({keys})</small>
    </button>
  );
};
