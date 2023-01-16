import React from 'react'
import {useContext} from 'react'
import { Link } from 'react-router-dom'
import {TheContext} from '../context/TheContext'
import Product from './Product'
import Title from './Title'

function ProductContainer2() {
  const y = useContext(TheContext)
  return (
    <>
    <div className="catalogue">
        <Title name='titleProduct2' content='Enjoy our feature products'/>
        <div className='productsContainer2'>
        {/* Pusimos una validacion para que solo se muestren los primero 4 productos, el resto los usaremos despues */}
        {
            y.insumos.map((item) => {
            if (item.id > 8) {
                return <Product key={item.id} item={item}/>
            }
            })
        }
        </div>
        <div className="buttonContainer">
        <Link style={{textDecoration:'none', color:'#fff'}} to="/arusa/products" onClick={() => window.scrollTo(0, 0)}>Shop All</Link>
        </div>
    </div>
    </>
  )
}

export default ProductContainer2