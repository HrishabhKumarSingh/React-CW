import { useState } from "react"
import "./event.css"

const Event = () => {
    const [count, setCount] = useState(5)
    
    const handleInc = () => {
        setCount((currentCount) => currentCount + 1)
    }
    const handleDec = () => {
        setCount((currentCount) => currentCount - 1)
    }
    const handleChange = (e) =>{
        console.log(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log("Submitted")
    }
    
    return (
        <div>Events components
            <div onClick={handleInc}>+</div>
            {count}
            <input onChange={handleChange} className="input" />
            <div onClick={handleDec}>-</div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} className="input" />
                <button>Submit</button>
            </form>
        </div>   
    )
}

export default Event;