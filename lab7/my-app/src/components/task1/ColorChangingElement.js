import React, { useState } from 'react';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const ColorChangingElement = ({ children, initialBackgroundColor = 'initial', initialColor = 'black' }) => {
  const [styles, setStyles] = useState({
    backgroundColor: initialBackgroundColor,
    color: initialColor,
  });

  const changeColors = () => {
    setStyles({
      backgroundColor: getRandomColor(),
      color: getRandomColor(),
    });
  };

  return (
    <div
      style={styles}
      onClick={changeColors}
    >
      {children}
    </div>
  );
};

export default ColorChangingElement;