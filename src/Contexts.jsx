import { useState } from "react";
import A from "./A";
import B from "./B";
import { UserContext } from "./userContext";

const Contexts = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>This is Contexts Component</h1>

      <button onClick={() => setCount((value) => value + 1)}>+</button>

      <h2>Parent Count: {count}</h2>

      <button onClick={() => setCount((value) => value - 1)}>-</button>

      <UserContext.Provider value={count}>
        <A />
        <B />
      </UserContext.Provider>
    </>
  );
};

export default Contexts;