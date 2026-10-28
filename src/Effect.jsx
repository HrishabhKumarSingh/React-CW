import { useEffect, useState } from 'react';

const Effect = () => {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(21);
  useEffect(() => {
    console.log("Effect happens");
  } , [count]);

  const handleIncrease = () => {
    setCount(count + 1);
  };
   
  const handleIncreaseAge = () => {
    setAge(age + 1);
  }
  const handleDecrease = () => {
    if(count>0) {
        setCount(count - 1);
    }
  }  
  const handleDecreaseAge = () => {
    setAge(age - 1);
  };
  return (
    <div>
        <h1>This is state components</h1>
        <h1 onClick={handleIncrease}>+</h1>
        <h1>{count}</h1>
        <h1 onClick={handleDecrease}>-</h1>
        <h1 onClick={handleIncreaseAge}>+</h1>
        <h1>{age}</h1>
        <h1 onClick={handleDecreaseAge}>-</h1>
    </div>
  );
}
export default Effect;