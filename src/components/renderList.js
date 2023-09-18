import React from 'react'
import Listitem from './listitem'

function RenderList() {
    const myArray = ['chandu',"suresh","disha","sevanti",'chandu']
    // key prop is only used in those rendering of child items of arrays where arrays cant be modified

  return (
    <div>
        <h1>List Rendering</h1>
        <ol>
          {
            myArray.map((eachItem,index)=>{
              return <Listitem name={eachItem} key={index}/>
            })

          }
        </ol>
    </div>
  )
}

export default RenderList 
