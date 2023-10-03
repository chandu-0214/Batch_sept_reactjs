import React from 'react'
import './conditionalRendering.css'


function Card(props) {
    console.log(props)
    const {title,link,description}=props.eachItemData
  return (
    <div className='wikiCard'>
       <h3>{title}</h3>
       <a href={link}>{link}</a>
       <p>{description}</p>
    </div>
  )
}

export default Card