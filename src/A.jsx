import { useContext } from "react";
import { UserContext } from "./UserContext";

const A = () => {
    const { count, setCount } = useContext(UserContext);

    return (
        <div>
            <h1>This is A component</h1>
            <h2 onClick={() => setCount(count + 1)}>{count}</h2>
        </div>
    )
}

export default A;