import React, { useState } from 'react'

function Button() {
    const [first, setfirst] = useState('My Button')
    const handleButton = () =>{
        console.log("Button is clicked")
        setfirst("Button is changed")
    }
    
  return (
    <div>
        <h2>{first}</h2>
        <button onClick={handleButton} >Click Me</button>
    </div>
  )
}

export default Button