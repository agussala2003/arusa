import React, { useContext, useState } from 'react'
import {TheContext} from '../context/TheContext'
import {Link} from 'react-router-dom'
import ItemCartDetail from './ItemCartDetail'

function CartContainer() {
  const x = useContext(TheContext)
  const [theproducts,settheproducts] = useState(x.addToCartfn()) 
  const lenghtof =  theproducts.filter (item => item != undefined)
  const totalPrice = () => lenghtof.reduce((acc, item) => acc + item.price, 0);
  const removeItem = (id) => settheproducts(lenghtof.filter(item => item.id !== id));
  console.log(totalPrice())
  if (lenghtof.length == 0) {
    return (
      <>
        <div className="productBanner">
            <h1>Take a look of the products in your cart...</h1>
        </div>
        <div className="cartContainerText">
          Your cart is empty...
          <div>
            <Link onClick={() => window.scrollTo(0, 0)} to="/products">Go Shopping</Link>
          </div>
        </div>
      </>
    )
  }
  else {
    return (
      <>
          <div className="productBanner">
              <h1>Take a look of the products in your cart...</h1>
          </div>
          <div className="orderSummary">
            Order Summary
          </div>
          <div className="buyContainer">
            <div className="infoBuy">
              <p>Total: $ {totalPrice()}</p>
              <button onClick={() => {document.location.reload(true)
                document.location.pathname = '/'
                alert('Successful operation')}}>Proceed to checkout</button>
              <button><Link onClick={() => window.scrollTo(0, 0)} to="/products" style={{color:'#fff', textDecoration:'none'}}>Continue shopping</Link></button>
            </div>
            <div className='cartContainerContent'>
              {
                theproducts.filter (item => item != undefined).map ((item) => {
                  return <ItemCartDetail fn={removeItem} item={item} key={item.id}/>
                })
              }
            </div>
          </div>
      </>
    )
  }
}

export default CartContainer