import React, { useState } from 'react'

function UseState() {
    const [count, setCount] = useState(0)
    const handleButton=()=>{
        setCount(prevCount=>prevCount+1)
        setCount(prevCount=>prevCount+1)
        setCount(prevCount=>prevCount+1)
    }

  return (
    <div>
        <h2>use-state</h2>
        <h1>{count}</h1>
        <button onClick={handleButton}>Click</button>
    </div>
  )
}

export default UseState