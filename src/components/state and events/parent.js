import React from 'react'
import Child from './child'

function Parent() {
  const parentShowData = (data)=>{
    console.log(" Parent")
    console.log(data)
  }
  return (
    <div>
        <h2>Parent</h2>
        <Child parentShowData={parentShowData}/>
    </div>
  )
}

export default Parent