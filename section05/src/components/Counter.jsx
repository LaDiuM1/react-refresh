import {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const addCount = () => {
        setCount(count + 1);
    }
    const subtractCount = () => {
        setCount(count - 1);
    }
    console.log(count);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={addCount}>+</button>
            <button onClick={subtractCount}>-</button>
        </div>
    )
}

export default Counter;