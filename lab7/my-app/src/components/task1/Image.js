import React, { useState } from 'react';
import pragueImage from './images/prague.jpg';

const Image = () => {
  const STEP = 50;
  const [isImageVisible, setIsImageVisible] = useState(true);
  const [imageWidth, setImageWidth] = useState(500); 

  const addImage = () => {
    setIsImageVisible(true);
    setImageWidth(500);
  };

  const deleteImage = () => {
    setIsImageVisible(false);
  };

  const increaseImageSize = () => {
    setImageWidth(prevWidth => Math.min(prevWidth + STEP, 1000)); 
  };

  const decreaseImageSize = () => {
    setImageWidth(prevWidth => Math.max(prevWidth - STEP, 50)); 
  };

  return (
    <>
      <a href="https://prague.eu/cs/" id="image-link">
        {isImageVisible && (
          <img
            src={pragueImage}
            alt="A beautiful collage of Prague" 
            className="image-control" 
            style={{ width: `${imageWidth}px` }} 
          />
        )}
      </a>
      <div id="imageControls">
        <button onClick={addImage}>Додати (Скинути)</button>
        <button onClick={increaseImageSize}>Збільшити</button>
        <button onClick={decreaseImageSize}>Зменшити</button>
        <button onClick={deleteImage}>Видалити</button>
      </div>
    </>
  );
};

export default Image;