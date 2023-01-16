import React from 'react'
import {Link} from 'react-router-dom'

function Product(props) {
  return (
    <>
      <Link onClick={() => window.scrollTo(0, 0)} style={{textDecoration:'none'}} to={`/arusa/item/${props.item.id}`}>
        <div className='cardContainer'>
            <img src={props.item.img} alt={props.item.product} />
            <div className="infoContainer">
                <p>{props.item.product}</p>
                <p>${props.item.price}</p>
            </div>
        </div>
      </Link>
    </>
  )
}

export default Product