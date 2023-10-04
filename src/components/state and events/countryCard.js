import React from 'react'
import './conditionalRendering.css'

function CountryCard(props) {
    const {flag,capital,name}=props.eachCountryItem
  return (
    <div className='wikiCard'>
        <h2>{name}</h2>
        <p>{capital}</p>
        <img src={flag} alt={name} className='flag'/>
    </div>
  )
}

export default CountryCard