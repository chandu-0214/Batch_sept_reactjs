import React, { useState } from 'react'

function Button() {
  // const [current state, state setter function] = useState(intialValue) // syntax
 const [intialValue,setUpdateintialvalue] = useState('chandu')
 console.log(intialValue)
    const handleButton = () =>{
        console.log("Button is clicked")
        setUpdateintialvalue("Reddy")
    }
    
  return (
    <div>
        <h2>{intialValue}</h2>
        <button onClick={handleButton} >Click Me</button>
    </div>
  )
}

export default Button

// extra notes 
// let arr= ['Reddy','chandu']

// // array destructuring 
// let name = arr[0]
// //console.log(name)

// let [name1,name2] = arr
// //console.log(name1,name2)


// let obj = {
//     name3:'chandu',
//     sal:100
// }
// // object destructuring 
// console.log(obj.name3)

// let {name3,sal} = obj
// console.log(name3,sal)