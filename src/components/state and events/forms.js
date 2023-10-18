import React, { useEffect, useRef, useState } from 'react'

function InputForm() {
    const inputRef=useRef(null)
    const [inputval, setInputval] = useState('')
    const handleINput=(event)=>{
      setInputval(event.target.value)
    }
    const handleClick = ()=>{
      // console.log("Click is triggered")
      // let inputEl = document.getElementById('input')
      // inputEl.value = 'chandu'
      // console.log(inputRef.current)
      // inputRef.current.focus()
      setInputval("chandu")
      //  inputRef.current.value="Chandu"
    }

    useEffect(() => {
      inputRef.current=inputval
      console.log(inputRef.current)
    },[inputval])
    
    
  return (
    <div>
        <h2>Use Ref</h2>
        {console.log('render')}
        <input id='input' ref={inputRef} value={inputval} onChange={handleINput} type='text' placeholder='write anything'/>
        <button onClick={handleClick}>Click</button>
        <h2>Current Value : {inputval}</h2>
        <h2>Previous Value :{inputRef.current}</h2>
    </div>
  )
}

export default InputForm