import React, { useState } from 'react'

function Counter(props) {
    console.log("first")
  const [count, setcount] = useState(0)
  const handleCountAdd = ()=>{
    setcount((prev)=>prev+props.increment)  // first it will update the state varibale and it triggeres the component

  }
  const handleCountMinus = ()=>{
    setcount((prev)=>prev-props.increment)  // first it will update the state varibale and it triggeres the component

  }
  return (
    <div>
        <h2 className='counterHeading'>Counter App-{props.increment}</h2>
        <h1 style={{color:props.clr}}>Count:{count}</h1>
        <button onClick={handleCountAdd}>Add+{props.increment}</button>
        <button onClick={handleCountMinus}>Minus-{props.increment}</button>
    </div>
  )
}

export default Counter