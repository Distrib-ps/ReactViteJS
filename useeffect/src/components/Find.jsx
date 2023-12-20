import { useEffect, useState } from 'react'
import Form from './Form';

function Find() {
    const [randomNumber, setRandomNumber] = useState(null);
  
    useEffect(() => {
      setRandomNumber(Math.floor(Math.random() * 100));
    }, []);

    console.log(randomNumber);
  
    return <Form randomNumber={randomNumber} />;
  }
  
  export default Find;