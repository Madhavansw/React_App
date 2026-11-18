import { useState } from "react";

const Counter = () => {

    // Step 1: Create state
    const [count, setCount] = useState(0);

    // Step 2: Increment function
    const handleIncrement = () => {
        setCount(count + 1);
    };

    // Step 3: Decrement function
    const handleDecrement = () => {
        setCount(count - 1);
    };

    // Step 4: Reset function
    const handleReset = () => {
        setCount(0);
    };

    // Step 5: Return JSX
    return (
        <div>
            <h1>Counter Application</h1>

            <h2>Count: {count}</h2>

            <button onClick={handleIncrement}>
                Increment
            </button>

            <button onClick={handleDecrement}>
                Decrement
            </button>

            <button onClick={handleReset}>
                Reset
            </button>

        </div>
    );
};

export default Counter;