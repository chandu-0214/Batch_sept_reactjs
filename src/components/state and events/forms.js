import React, { useRef, useState } from 'react'

function InputForm() {
    const inputRef=useRef(null)
    const handleINput=(event)=>{
            console.log("Input triggered")
            
    }
    const handleClick=(event)=>{
        console.log("Click triggered")
        console.log(inputRef)
        inputRef.current="chandu"
}
  return (
    <div>
        <h2>Use Ref</h2>
        {console.log(inputRef.current)}
        <input value={inputRef.current} ref={inputRef} onChange={handleINput} type='text' placeholder='write anything'/>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default InputForm