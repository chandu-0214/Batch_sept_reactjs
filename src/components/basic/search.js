import React from 'react'

const SearchName = () => {
    // above the return

    let value = 5 
    const tellValueOf5 = (a)=>{
        // if(value===a) {
        //     console.log("Equals to 5")
        // }
        // else {
        //     console.log("Not Equals to 5")
        // }

        // ternary operator 
        // condition ? True : false

        value===a ? console.log("Equals to 5") : console.log("Not Equals to 5")
    }
    

// after return if u want to use js then the code should be placed in the {}
  return (
    <div>
        <h2>Seach Your Name</h2>
        {console.log(tellValueOf5(10))}
    </div>
  )
}

export default SearchName