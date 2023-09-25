import React, { useState } from 'react'
import Counter from './counter'

function ConditionalRendering() {
    const [buttonTitle, setbuttonTitle] = useState(false)
    console.log(buttonTitle)
    const handleButtonForConditionalRendering = () =>{
        setbuttonTitle(!buttonTitle)
    }

  return (
    <div>
        <h2>Conditional Rendering</h2>
        <button onClick={handleButtonForConditionalRendering}>{buttonTitle ? "Show Counter" : "Hide Counter"}</button>
        {!buttonTitle && <Counter increment={1} clr={"orange"}/>}
        {!buttonTitle && <Counter increment={2} clr={"blue"}/>}
        {!buttonTitle && <Counter increment={3} clr={"green"}/>}
    </div>
  )
}

export default ConditionalRendering