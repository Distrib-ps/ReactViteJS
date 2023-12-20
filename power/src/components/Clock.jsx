import { useState } from 'react';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  const updateCurrentTime = () => {
    setCurrentTime(new Date());
  };

  setTimeout(updateCurrentTime, 1000);

  return <p>Il est {currentTime.toLocaleTimeString()}</p>;
};

export default Clock;
