import React from 'react'

const ProductItem = (props) => {
    const {id,name,price}=props.product
    const handleAddButton=()=>{
        console.log(name)
        props.dispatch({typeOfAct:"ADD_T0_CART",payload:props.product})
    }
  return (
    <div>
        <li>
          <p>{name+", price=> Rs."+price}</p>
          <button onClick={handleAddButton}>{"Add This "+name+" To Cart"}</button>
        </li>
    </div>
  )
}

export default ProductItem