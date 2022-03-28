import React, { useState } from 'react';

export const Logo = () => {
  const initialTitle = 'Binary Shift',
    initialClass = 'text-3xl md:text-6xl';

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
    <div
      className="text-neutral-500 font-['Space_Grotesk'] p-3 w-1/2 mx-auto mb-12"
      onMouseEnter={() => translateTo('binary')}
      onMouseLeave={() => translateTo('title')}
    >
      <div className={`${logoClass} font-bold leading-[1.3rem] h-16`}>
        {display}
      </div>
      <div>
        by <span className="hover:text-[#00f] cursor-pointer">codigoisaac</span>
      </div>
    </div>
  );
};
