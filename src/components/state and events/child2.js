import React from 'react'

function Child2(props) {
  const name = "Chandu"
  console.log(props)
const handleButton=()=>{
  console.log("click")
  props.showData(name)
}

  return (
    <div>
        <h2>Child2</h2>
        <button onClick={handleButton}>Send the Data</button>
        <p>{props.name}</p>
    </div>
  )
}

export default Child2