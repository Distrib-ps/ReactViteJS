const Average = ({ mark }) => {
    let average = 0;
    for (let i = 0; i < mark.length; i++) {
      average += mark[i];
    }
    average /= mark.length;
    average = Math.round(average * 100) / 100;
    return average;
  };
  
  export default Average;