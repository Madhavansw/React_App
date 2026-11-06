import React, { use } from "react";
import { useReducer } from "react";

const _initialState = {
    count: 0
};
const _reducer = (state,action) => {
    switch(action.type){
        case "Increment": {
            return{
                ...state,
                count: state.count + 1
            }
        }
        case "Decrement": {
            return {
                ...state,
                count: state.count - 1
            }
        }
        case "Reset": {
            return {
                ...state,
                count: 0
            }
        }       
    }
}

const CustomReducer =() => {
    const [state, dispatch] = useReducer(_reducer, _initialState);
   
    return(
        <div>
            <h1>Custom Reducer</h1>
            <h2> count: {state.count}</h2>
        <button onClick={() => {dispatch({type:"Increment"})}}> Increment</button>
        <button onClick={() => {dispatch({type:"Decrement"})}}> Decrement</button>
        <button onClick={() => {dispatch({type:"Reset"})}}> Reset</button>
        </div>
    )
}
export default CustomReducer;