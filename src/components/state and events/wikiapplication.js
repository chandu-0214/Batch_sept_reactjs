import React, { useEffect, useState } from 'react'
import Card from './card'

function Wikiapplication() {
  const CardsPerPage = 3

    const [searchValue, setSearchValue] = useState('')
    const [fetchedData, setFetchedData] = useState({})
    const [pageCount, setPageCount] = useState(0)
    const [paginatedData, setPaginatedData] = useState([])
    const [left, setleft] = useState(0)
    const [right, setright] = useState(CardsPerPage)
    

    const handleinput=(event)=>{
        if(event.key === 'Enter' && event.target.value) {
            // code
            setSearchValue(event.target.value)
        }

    }
    const handlePageCount =()=>{
      let lengthOfData = fetchedData.search_results.length 
      console.log(lengthOfData)
      setPageCount(prevValue=>prevValue+1)
      setleft(prev=>prev+CardsPerPage)
      setright(prev=>prev+CardsPerPage)
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
    useEffect(() => {
      console.log(left,right,'update over')
      if( Object.keys(fetchedData).length ){
      setPaginatedData(fetchedData.search_results.slice(left,right))

      }

    }, [fetchedData,pageCount,left,right])
    
    
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
            paginatedData.length ? paginatedData.map((eachItem,index)=>{
              return <Card eachItemData={eachItem} key={index}/>
            }) : "No Item found"

          }
        </ol>
        </div>
        {paginatedData.length ? <div>
        <p>Page no. {pageCount}</p>
        <button onClick={handlePageCount}>Next Page</button>
        </div>:""}
    </div>
  )
}

export default Wikiapplication