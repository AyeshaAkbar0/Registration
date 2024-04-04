import React, { useState } from 'react';
import con from './asset/page2/term.png'
import tik from './asset/page2/tik.png'

function ImageToggle() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <img
        src={con}
        alt="Background"
        style={{ position: 'absolute', zIndex: 0 }}
      />
      {isVisible && (
        <img
          src={tik}
          alt="Top"
          style={{ position: 'absolute', zIndex: 1, width: '100%', height: '100%' }}
          onClick={toggleVisibility}
        />
      )}
      {!isVisible && (
        <div
          onClick={toggleVisibility}
          style={{ position: 'absolute', zIndex: 1, width: '100%', height: '100%' }}
        />
      )}
    </div>
  );
}

export default ImageToggle;
