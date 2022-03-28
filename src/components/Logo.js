import React, { useState } from 'react';

export const Logo = () => {
  const initialTitle = 'Binary Shift',
    initialClass = 'text-4xl md:text-6xl';

  const [display, setDisplay] = useState(initialTitle);
  const [logoClass, setClass] = useState(initialClass);

  const translateTo = (type) => {
    if (type === 'title') {
      setDisplay(initialTitle);
      setClass(initialClass);
    } else {
      setDisplay(
        '01000010 01101001 01101110 01100001 01110010 01111001 00100000 01010011 01101000 01101001 01100110 01110100'
      );
      setClass('text-lg');
    }
  };

  return (
    <div className="text-neutral-500 font-['Space_Grotesk'] p-3 w-full mx-auto flex flex-col items-center">
      <div
        className="h-32"
        onMouseEnter={() => translateTo('binary')}
        onMouseLeave={() => translateTo('title')}
      >
        <div className={`${logoClass} font-bold min-h-16 flex items-end`}>
          {display}
        </div>
        <div>
          by{' '}
          <span className="hover:text-[#00f] cursor-pointer">codigoisaac</span>
        </div>
      </div>
    </div>
  );
};
