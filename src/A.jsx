import { useContext } from "react";
import { UserContext } from "./userContext";

const A = () => {
  const data = useContext(UserContext);

  return (
    <div>
      <h1>A component</h1>
      <h1>This is our A component: {data}</h1>
    </div>
  );
};

export default A;