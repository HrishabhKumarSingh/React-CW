import { useCallback, useState } from "react";
const Callback = () => {
    const [number, setNumber] = useState(36);
    const result = useCallback(()=>{
        return number * 23;
    }, [number]);
    
    return (
        <div>
            <h1>This is Callback Component</h1>
            <h2>Result is {result()}</h2>
        </div>
    )
}
export default Callback;