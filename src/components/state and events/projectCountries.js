import React, { useEffect, useState } from 'react'
import CountryCard from './countryCard'

function ProjectCountries() {
    const [FilteredData, setFilteredData] = useState([])
    const [data, setData] = useState([])

    const handleInputSearch = (event)=>{
        console.log(event.target.value)
        const filteredData = data.filter((eachItem)=>{
                return (eachItem.name).toLowerCase().includes((event.target.value).toLowerCase())
        })
        setFilteredData(filteredData)
        console.log(filteredData,'filteredData')
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
        {
            FilteredData.length ? FilteredData.map((eachCountryItem)=><CountryCard eachCountryItem={eachCountryItem}/>) : "No Item Found"
        }
    </div>
  )
}

export default ProjectCountries