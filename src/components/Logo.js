import React, { useState } from 'react';

export const Logo = () => {
  const initialTitle = 'Binary Shift',
    initialBinary =
      '01000010 01101001 01101110 01100001 01110010 01111001 00100000 01010011 01101000 01101001 01100110 01110100',
    initialClass = 'text-4xl md:text-6xl',
    alteredClass = 'text-sm md:text-lg',
    isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

  const [display, setDisplay] = useState(initialTitle);
  const [logoClass, setClass] = useState(initialClass);

  const translateTo = (type) => {
    if (type === 'title' && !isMobile) {
      setDisplay(initialTitle);
      setClass(initialClass);
    } else if (type === 'binary' && !isMobile) {
      setDisplay(initialBinary);
      setClass(alteredClass);
    } else if (type === 'reverse' && isMobile) {
      setDisplay(display === initialTitle ? initialBinary : initialTitle);
      setClass(logoClass === initialClass ? alteredClass : initialClass);
    }
  };

  return (
    <div className="text-neutral-500 font-['Space_Grotesk'] p-3 w-full mx-auto flex flex-col items-center mb-10">
      <div
        className="h-16 flex items-end"
        onMouseEnter={() => translateTo('binary')}
        onMouseLeave={() => translateTo('title')}
        onClick={() => translateTo('reverse')}
      >
        <div className={`${logoClass} font-bold min-h-16 flex items-end`}>
          {display}
        </div>
      </div>

      <div className="mt-3">
        by{' '}
        <a
          href="https://isaacmuniz.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#00f] cursor-pointer"
        >
          isaac
        </a>
      </div>
    </div>
  );
};
