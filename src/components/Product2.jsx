import React from 'react'
import { Link } from 'react-router-dom'

function Product2({item}) {
  return (
    <>
    <Link onClick={() => window.scrollTo(0, 0)} style={{textDecoration:'none'}} to={`/item/${item.id}`}>
      <div className={`firstBanner` + item.id}>
        <div className="cardContainer">
          <img src={item.img} alt="Product Image"/>
          <div className="infoContainer2">
                  <p>{item.product}</p>
                  <p>${item.price}</p>
              </div>
        </div>
      </div>
    </Link>
    </>
  )
}

export default Product2