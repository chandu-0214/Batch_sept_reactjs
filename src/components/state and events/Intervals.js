import React, { useEffect, useState } from 'react'

function Intervals() {

const [count, setCount] = useState(0)
const [isRunning, setIsRunning] = useState(false)
const handleStart = ()=>{
  setIsRunning(true)
}
const handleStop = ()=>{
  setIsRunning(false)
}
const handleReset = ()=>{
  setCount(0)
  setIsRunning(false)
}

 useEffect(() => {
   let intervalId
  if(isRunning){
    intervalId = setInterval(()=>{
      setCount((prev)=>prev+1)
  },1000)
  }
  else{
    clearInterval(intervalId)
  }
 
   return () => {
     clearInterval(intervalId)
   }
 },[isRunning])
 

  return (
    <div>
        <h2>Set Intervals </h2>
        <p>Counter :- {count}</p>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
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