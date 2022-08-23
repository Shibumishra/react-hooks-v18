import React, { useState } from 'react';

const UseState = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    }

    const dicrement = () => {
        if (count > 0) {
            setCount(prevCount => prevCount - 1);
        } else {
            alert('Please Add Count!')
        }
    };
    
    return (
        <div>
            <button onClick={dicrement}>-</button>
            <span>Count: {count}</span>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default UseState;