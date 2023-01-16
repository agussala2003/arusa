import React from 'react'
import {useContext} from 'react'
import { Link} from 'react-router-dom'
import {TheContext} from '../context/TheContext'
import Product from './Product'
import Title from './Title'

function ProductContainer() {
  const y = useContext(TheContext)
  return (
    <>
    <Title name='titleProduct' content='Enjoy our feature products'/>
    <div className='productsContainer'>
      {/* Pusimos una validacion para que solo se muestren los primero 4 productos, el resto los usaremos despues */}
      {
        y.insumos.map((item) => {
          if (item.id <= 4) {
            return <Product key={item.id} item={item}/>
          }
        })
      }
    </div>
    <div className="buttonContainer">
      <Link style={{textDecoration:'none', color:'#000'}} to="/arusa/products" onClick={() => window.scrollTo(0, 0)}>Shop All</Link>
    </div>
    </>
  )
}

export default ProductContainer