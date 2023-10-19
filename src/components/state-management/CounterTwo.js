import React, { useReducer } from 'react'

const IntialState = {
    firstCount: 0,
    secoundCount: 0,
}

const reducer = (state,action)=>{
    // all action should be written in a switch statements
    console.log(action)
    console.log(state)
    switch(action.typeOfAct){
        case "Increment":
            return {firstCount:state.firstCount+action.payload,secoundCount:state.secoundCount}
        case "Decrement":
            return {firstCount:state.firstCount-action.payload,secoundCount:state.secoundCount}
        case "Reset":
            return {firstCount:0,secoundCount:state.secoundCount}
        case "IncrementForTwo":
            return {secoundCount:state.secoundCount+action.payload,firstCount:state.firstCount}
        case "DecrementForTwo":
            return {secoundCount:state.secoundCount-action.payload,firstCount:state.firstCount}
        case "ResetForTwo":
            return {secoundCount:0,firstCount:state.firstCount}
        default:
            return state
    }
}

const CounterTwo = () => {
    const [state, dispatch] = useReducer(reducer,IntialState)
    return (
      <div>
          <h2>CounterReducer</h2>
          <p>Count One= {state.firstCount}</p>
          <div>
              <button onClick={()=>{dispatch({typeOfAct:"Increment",payload:10})}}>Increment By 10</button>
              <button onClick={()=>{dispatch({typeOfAct:"Decrement",payload:1})}}>Decrement</button>
              <button onClick={()=>{dispatch({typeOfAct:"Reset"})}}>Reset</button>
          </div>
          <div>
          <p>Count Two= {state.secoundCount}</p>
          <div>
              <button onClick={()=>{dispatch({typeOfAct:"IncrementForTwo",payload:10})}}>Increment By 10</button>
              <button onClick={()=>{dispatch({typeOfAct:"DecrementForTwo",payload:1})}}>Decrement</button>
              <button onClick={()=>{dispatch({typeOfAct:"ResetForTwo"})}}>Reset</button>
          </div>
      </div>
      </div>
    )
}

export default CounterTwo