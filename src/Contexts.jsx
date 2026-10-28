import { useState } from "react";
import A from "./A";
import { UserContext } from "./UserContext";

const Contexts = () => {
    const [count, setCount] = useState(0);
    return (
    <>
    <h1>This is Contexts</h1>
    <div>
        <UserContext.Provider value={{ count, setCount }}>
            <A />
        </UserContext.Provider>
    </div>
    </>
    )
}
export default Contexts;