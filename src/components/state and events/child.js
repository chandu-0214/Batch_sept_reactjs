import React, { useState } from 'react'
import Child2 from './child2'

function Child(props) {
  const [data, setdata] = useState('')
  const showData =(name)=>{
    console.log("Inside Child")
    // code duplication
    setdata(name)
    console.log(name)
  }
  if(data){
    props.parentShowData(data)
  }
  return (
    <div>
        <h2>Child</h2>
        <Child2 showData={showData}/>
    </div>
  )
}

export default Child