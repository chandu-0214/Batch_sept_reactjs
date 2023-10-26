import React, { useReducer } from 'react'
import ProductItem from './productItem'
import CartItem from './cartItem'

const intialstate = {
    cartItems: [],
    totalprice: 0,
}
const cartReducer =(state,action)=>{
    // code to update the state with disptach function
    // action =>  add and remove
    // u need to maintain cartItem state and total price
    switch(action.typeOfAct){
        case "ADD_T0_CART":
            return {
                cartItems: [...state.cartItems, action.payload],
                totalprice: state.totalprice + action.payload.price
            }
        case "REMOVE_T0_CART":
            return {
                cartItems: state.cartItems.filter(item=>item.name!==action.payload.name),
                totalprice: state.totalprice - action.payload.price
            }
        default:
            return state
    }

}



const ShoppingCart = () => {

    const [state, dispatch] = useReducer(cartReducer, intialstate)
    // products data is comming from the API calls
    const productsData = [
        {id:1, name: "Watch", price:10},
        {id:2, name: "Mobile", price:20},
        {id:3, name: "Washing Machine", price:30},
        {id:4, name:"Air Conditioner", price:50}
    ]

  return (
    <div>
        <h2>Shopping Cart</h2>
        <div> 
            <h1>Products</h1>
            <ul>
                {productsData.map(product=><ProductItem key={product.id} product={product} dispatch={dispatch}/>)}
            </ul>
        </div>
        <div>
        <h1>Cart</h1>
        <p>{"Item Count = "+state.cartItems.length}</p>
        <p>{"Total Price = "+state.totalprice }</p>
        <p>Items List =</p>
        <ul>
            {state.cartItems.map(product=><CartItem key={product.id} product={product}  dispatch={dispatch}/>)}
            </ul>
        </div>
    </div>
  )
}

export default ShoppingCart