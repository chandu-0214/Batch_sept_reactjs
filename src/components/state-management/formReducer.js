import React, { useReducer } from 'react'



const intialState = {
    firstName: '',
    contact: '',
    dob: ''  
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'firstName':
            return {
              ...state,
                firstName: action.payload
            }
        case 'contact':
            return {
              ...state,
                contact: action.payload
            }
        case 'dob':
            return {
              ...state,
                dob: action.payload
            }
        default:
            return state
    }   
}


const FormReducer = () => {

    const [state, dispatch] = useReducer(reducer, intialState)

    const handleFirstName=(event)=>{
        dispatch({
            type: 'firstName',
            payload: event.target.value
        })
    }
    const handleContact=(event)=>{
        dispatch({
            type: 'contact',
            payload: event.target.value
        })
    }
    const handleDob=(event)=>{
        dispatch({
            type: 'dob',
            payload: event.target.value
        })
    }

  return (
    <div>
        <form>
            <h2>Student Application Form</h2>
            <div>
                <label htmlFor="Name">First Name</label>
                <input onChange={handleFirstName} id="Name" type="text"  placeholder='First Name'/>
            </div>
            <div>
                <label htmlFor="Contact">Contact No</label>
                <input onChange={handleContact} id="Contact" type="tel"  placeholder='Contact'/>
            </div>
            <div>
                <label htmlFor="dob">Date of Birth</label>
                <input onChange={handleDob} id="dob" type="date"  placeholder='Dob'/>
            </div>

        </form>
        {console.log(state)}
        <button>Submit</button>
    </div>
  )
}

export default FormReducer 

// // rest and spread operator 
// const arr = [20,58,40,78] 
// // spread => spread all the items in the array or in the object (...)

// const arr2 = [...arr]
// console.log(arr2)
// const myobj = {
//   name:"chandu",
//   role:"Frontend dev",
// }
// const mybj2 = {...myobj,name:"Shekhhar"}
// console.log(mybj2)