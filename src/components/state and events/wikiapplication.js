import React, { useEffect, useState } from 'react'
import Card from './card'

function Wikiapplication() {
    const [searchValue, setSearchValue] = useState('')
    const [fetchedData, setFetchedData] = useState({})

    const handleinput=(event)=>{
        if(event.key === 'Enter' && event.target.value) {
            // code
            setSearchValue(event.target.value)
        }

    }
    useEffect(() => {
        let wikiURL = "https://apis.ccbp.in/wiki-search?search=";
        const fetchdata = (searchValue)=>{
   
            let url = wikiURL + searchValue
            fetch(url)
        .then((res)=>res.json())
        .then((data)=>setFetchedData(data))
        }
        if(searchValue !==""){
            fetchdata(searchValue)
        }

    }, [searchValue])
    
  return (
    <div>
        <h2>Wikiapplication</h2>
        <div>
            <label htmlFor='inputsearch'>Search Here</label>
            <input onKeyUp={handleinput} type='text' placeholder='enter to search'/>
        </div>
        <div>  
        <ol>
          {
            Object.keys(fetchedData).length ? fetchedData.search_results.map((eachItem,index)=>{
              return <Card eachItemData={eachItem} key={index}/>
            }) : "No Item found"

          }
        </ol>
        </div>
    </div>
  )
}

export default Wikiapplication