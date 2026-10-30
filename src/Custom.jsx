import useCounter from './useCounter';

const Custom = () => {
    const {count, increment, decrement} = useCounter();
    return (
        <div>
            <h1>This is Custom Hook</h1>
            <h2 onClick={increment}>+</h2>
            <h2>Count: {count}</h2>
            <h2 onClick={decrement}>-</h2>
        </div>
    )
}
export default Custom;