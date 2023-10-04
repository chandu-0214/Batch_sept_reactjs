import React, { useEffect, useState } from 'react'
import CountryCard from './countryCard'

function ProjectCountries() {
    const [searchValue, setSearchValue] = useState('')
    const [data, setData] = useState([])

    const handleInputSearch = (event)=>{
        console.log(event.target.value)
        setSearchValue(event.target.value)
    }

    useEffect(() => {
        const fetchdata = ()=>{
        let url ='https://restcountries.com/v2/all'
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>setData(data))
        }
        fetchdata()
    }, [])
    
  return (
    <div>
        <h2>Project-Countries</h2>
        <div>
            <label>Search Country</label>
            <input type='text' placeholder='country name' onChange={handleInputSearch}/>
        </div>
        {console.log(data)}
        {
            data ? data.map((eachCountryItem)=><CountryCard eachCountryItem={eachCountryItem}/>) : " No Item Found"
        }
    </div>
  )
}

export default ProjectCountries