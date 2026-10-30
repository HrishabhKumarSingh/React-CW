import { useMemo, useState } from "react";

const Memo = () =>{ 
  const [number, setNumber] = useState(36);
  const result = useMemo(()=>{
    return number * 23;
  }, [number]);

  return(
    <div>
      <h1>This is Memo Component</h1>
      <h2>Result is {result}</h2>
    </div>
  )
}

export default Memo;
