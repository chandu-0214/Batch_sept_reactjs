import React, { useReducer } from 'react'


const IntialCount = 0

const reducer = (state,action)=>{
    // all action should be written in a switch statements
    console.log(action)
    switch(action){
        case "Increment":
            return state+1
        case "Decrement":
            return state-1
        case "Reset":
            return IntialCount
        default:
            return state   
    }
}

function CounterReducer() {

    const [count, dispatch] = useReducer(reducer,IntialCount)
  return (
    <div>
        <h2>CounterReducer</h2>
        <p>Count= {count}</p>
        <div>
            <button onClick={()=>{dispatch("Increment")}}>Increment</button>
            <button onClick={()=>{dispatch("Decrement")}}>Decrement</button>
            <button onClick={()=>{dispatch("Reset")}}>Reset</button>
        </div>
    </div>
  )
}

export default CounterReducer