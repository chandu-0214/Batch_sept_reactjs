import React, { useEffect, useState } from 'react'
import Counter from './counter'
import './conditionalRendering.css'

function ConditionalRendering() {
    const [buttonTitle, setbuttonTitle] = useState(false)
    console.log(buttonTitle)
    const handleButtonForConditionalRendering = () =>{
        setbuttonTitle(!buttonTitle)
    }
    useEffect(() => {
      console.log("first")
    
      return () => {
        console.log("secound")
      }
    }, [])
    

  return (
    <div>
        <h2 className='heading'>Conditional Rendering</h2>
        {console.log("Inside return")}
        <button onClick={handleButtonForConditionalRendering}>{buttonTitle ? "Show Counter" : "Hide Counter"}</button>
        {!buttonTitle && <Counter increment={1} clr={"orange"}/>}
        {!buttonTitle && <Counter increment={2} clr={"blue"}/>}
        {!buttonTitle && <Counter increment={3} clr={"green"}/>}
    </div>
  )
}

export default ConditionalRendering