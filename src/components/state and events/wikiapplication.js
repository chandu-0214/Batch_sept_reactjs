import React from 'react'

function Wikiapplication() {

    const handleinput=(event)=>{
        console.log('input trifggers',event.key)
        console.log(event.target.value)
        if(event.key === 'Enter' && event.target.value) {
            // code
        }

    }
  return (
    <div>
        <h2>Wikiapplication</h2>
        <div>
            <label htmlFor='inputsearch'>Search Here</label>
            <input onKeyUp={handleinput} type='search' placeholder='enter to search'/>
        </div>
    </div>
  )
}

export default Wikiapplication