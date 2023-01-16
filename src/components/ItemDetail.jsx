import React, { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import {TheContext} from '../context/TheContext'

function ItemDetail({item}) {
    const [Buy,setBuy] = useState(false)
    const z = useContext(TheContext)
  return (
    <>
        <div className="infoBar">
            <p>Home | </p>
            <p>Shop All |</p>
            <p className='destaque'> {item.product}</p>
        </div>
        <div className="detailContainer">
            <div className="detailImg">
                <img src={item.img} alt="" />
            </div>
            <div className="detailInfo">
                <div className="totalInfo">
                    <h1>{item.product}</h1>
                    <p>{item.desc}</p>
                    <p className='priceInfo'>${item.price}</p>
                        {Buy ? <div><Link onClick={() => window.scrollTo(0, 0)} to="/cart" style={{color:'#fff', textDecoration:'none'}}><button>Go to cart</button></Link>
                                <Link onClick={() => window.scrollTo(0, 0)} to="/products" style={{color:'#fff', textDecoration:'none'}}><button>Continue shopping</button></Link></div> : <button onClick={() => {
                        z.addToCartfn(item.id)
                        setBuy(true)
                        }}>Add to bag</button>}
                </div>
            </div>
        </div>
    </>
  )
}

export default ItemDetail