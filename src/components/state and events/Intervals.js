import React, { useEffect, useState } from 'react'

function Intervals() {

const [count, setCount] = useState(0)
const handleStart = ()=>{
  
}
 useEffect(() => {
   const intervalId = setInterval(()=>{
    // setCount((prev)=>prev+1)
    setCount(count+1)
},1000)
 
   return () => {
     clearInterval(intervalId)
   }
 },[count])
 

  return (
    <div>
        <h2>Set Intervals </h2>
        <p>{count}</p>
        <button onClick={handleStart}>Start</button>
        <button>Stop</button>
        <button>Reset</button>
    </div>
  )
}

export default Intervals


// js code 
// let count = 0
// console.log("chandu")
// const intervalId = setInterval(()=>{
//     count++
//     console.log(count)
//     if(count ===5){
//       clearInterval(intervalId)
//     }
// },2000)