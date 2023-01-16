import React from 'react'
import ProductContainer from './ProductContainer'
import Individual from './Individual'
import Banner from './Banner'
import Lookbook from './Lookbook'
import ProductContainer2 from './ProductContainer2'
import Article from './Article'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <main>
        <div className="imgContainer">
            <div className="titleContainer">
                <h3>Seamless furtniture</h3>
                <h3>with natural fabrics</h3>
            </div>
            <Link style={{textDecoration:'none', color:'#000'}}  onClick={() => window.scrollTo(0, 0)} to="/arusa/products">Shop all</Link>
        </div>
        <ProductContainer/>
        <Individual/>
        <Banner/>
        <Lookbook/>
        <ProductContainer2/>
        <Article/>
    </main>
    </>
  )
}

export default Home