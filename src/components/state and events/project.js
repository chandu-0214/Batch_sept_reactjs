import React, { useState } from 'react'
import Listitem from '../basic/listitem'

function Project() {
    const person_names = [
        "Alice Johnson",
        "Bob Smith",
        "Eva Davis",
        "Michael Brown",
        "Sophia Martinez",
        "David Lee",
        "Olivia Wilson",
        "Daniel Taylor",
        "Isabella Anderson",
        "James Clark",
        "Mia Thomas",
        "William Hernandez",
        "Charlotte White",
        "John Garcia",
        "Emma Jones",
        "Matthew Rodriguez",
        "Ava Jackson",
        "Andrew Wilson",
        "Emily Lewis",
        "Joseph Moore"
    ]
    const [personArray, setpersonArray] = useState(person_names)
    const handleInputSearch = (event)=>{
        console.log(event.target.value)
        const filteredNamesArray = person_names.filter((eachName)=>{
            return eachName.toLowerCase().includes((event.target.value).toLowerCase())
        })
        console.log(filteredNamesArray)
        setpersonArray(filteredNamesArray)
        console.log("Input trigerred")
    }
  return (
    <div>
        <h2>Project</h2>
        <div>
            <label htmlfor="name">Search Name</label>
            <input  onChange={handleInputSearch} type='search' placeholder='Enter Name'/>
            <ul>
          {
            personArray.length>0 ? personArray.map((eachItem,index)=>{
              return <Listitem name={eachItem} key={index}/>
            }) : "No Name Found"
          }
        </ul>
        </div>
    </div>
  )
}

export default Project