import React from 'react'
import './conditionalRendering.css'
// event propagation / bubbling
function ToolBar() {
    const handleButton1=(event)=>{
        event.stopPropagation()
        console.log("Button 1 clicked")
        // 100 lines 
    }
    const handleButton2=(event)=>{
        event.stopPropagation()
        console.log("Button 2 clicked")
    }
    const handleToolBardiv=(event)=>{
        event.stopPropagation()
        console.log("ToolBar is clicked")
    }
  return (
    <div>
        <h2>ToolBar</h2>
        <div onClick={handleToolBardiv} className='toolbarDiv'>
            <button onClick={handleButton1}className='buttonToolbar'>Button-1</button>
            <button onClick={handleButton2} className='buttonToolbar'>Button-2</button>
        </div>
    </div>
  )
}

export default ToolBar