import React from 'react'

const CartItem = (props) => {
    const {id,name,price}=props.product
    const handleRemoveButton=()=>{
        console.log(name)
        props.dispatch({typeOfAct:"REMOVE_T0_CART",payload:props.product})
    }
  
  return (
    <div>
        <li>
          <p>{name+", price=> Rs."+price}</p>
          <button onClick={handleRemoveButton}>{"Remove The "+name+" From Cart"}</button>
        </li>
    </div>
  )
}

export default CartItem