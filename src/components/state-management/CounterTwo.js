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
            return {...state,firstCount:state.firstCount+action.payload}
        case "Decrement":
            return {...state,firstCount:state.firstCount-action.payload}
        case "Reset":
            return {...state,firstCount:0}
        case "IncrementForTwo":
            return {...state,secoundCount:state.secoundCount+action.payload}
        case "DecrementForTwo":
            return {...state,secoundCount:state.secoundCount-action.payload}
        case "ResetForTwo":
            return {...state,secoundCount:0,}
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