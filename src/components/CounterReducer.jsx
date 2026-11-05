import { useReducer } from "react";

// Step 1: Define initial state
const initialState = {
  count: 0
};

// Step 2: Create reducer function
const reducer = (state, action) => {

  switch (action.type) {

    case "INCREMENT":
      return { ...state, count: state.count + 1 };

    case "DECREMENT":
      return { ...state, count: state.count - 1 };

    case "RESET":
      return { ...state, count: 0 };

    default:
      return state;
  }
};

// Step 3: Create component
const Counter = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count: {state.count}</h1>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Increment
      </button>

      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        Decrement
      </button>

      <button onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>

    </div>
  );
};

export default Counter;