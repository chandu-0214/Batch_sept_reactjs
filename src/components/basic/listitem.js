import React from 'react'

function Listitem(props) {
  console.log(props,'props in listitem ')
  return (
    <div>
        <li>{props.name}</li>
    </div>
  )
}

export default Listitem