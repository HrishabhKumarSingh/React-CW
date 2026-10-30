import { useContext } from "react";
import { UserContext } from "./userContext";

const B = () => {
  const data = useContext(UserContext);

  return (
    <div>
      <h1>B Components</h1>
      <h1>This is our B component: {data}</h1>
    </div>
  );
};

export default B;