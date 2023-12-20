import { useState } from 'react';

const Slider = () => {
  const images = [
    './image1.jpg',
    './image2.jpeg',
    './image3.jpeg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  let timeout = null


  const randomImage = () => {
    clearTimeout(timeout);
    setCurrentIndex(Math.floor(Math.random() * images.length));
  };

  const PreviousImage = () => {
    clearTimeout(timeout);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }

  const changeImage = () => {
    clearTimeout(timeout);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };


  const startTimer = () => {
    timeout = setTimeout(changeImage, 2000)
  }

  const MouseEnter = () => {
    console.log('MouseEnter');
    clearTimeout(timeout);
  };

  const MouseLeave = () => {
    console.log('MouseLeave');
    startTimer();
  };


  startTimer();

  return (
    <div>
      <h2>Slider</h2>
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        style={{ width: '100px', height: '100px' }}
        onMouseEnter={MouseEnter}
        onMouseLeave={MouseLeave}
        />
        <br />
        <button onClick={PreviousImage}>Previous</button>
        <button onClick={changeImage}>Next</button>
        <button onClick={randomImage}>Random</button>
    </div>
  );
};

export default Slider;
