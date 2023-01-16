import React from 'react'
import {useContext, useState} from 'react'
import {TheContext} from '../context/TheContext'
import {Link} from 'react-router-dom'
import '../index.css'

function Nav() {
    const [burguer, setBurguer] = useState(true)
    const x = useContext(TheContext)
    function bActive () {
        return <div>
            <span></span>
            <span></span>
            <span></span>
        </div>
    }
    function bNone () {
        return <div>
            <span className='activeBars1'></span>
            <span className='activeBars2'></span>
            <span className='activeBars3'></span>
        </div>
    }
    function bothActions () {
        setBurguer(!burguer);
        window.scrollTo(0, 0)
    }
  return (
    <>
    <nav className={burguer ? 'activeNav' : 'activeNav navOpen'}>
        <div className="navContainer">
            <div className="bgContainer">
                <div className='btBurguer' onClick={() => setBurguer(!burguer)}>
                {burguer ? bActive() : bNone()}
                </div>
                <p>SHOP</p>
            </div>
            <div className="tContainer">
                <Link onClick={() => window.scrollTo(0, 0)} style={{textDecoration: 'none'}} to="/"><h3>arusa</h3></Link>
            </div>
            <div className="cartContainer">
                    <Link className='bag' style={{textDecoration: 'none'}} to="/cart"><i className='bx bx-cart'></i></Link>
            </div>
        </div>
        <div className="linksContainer">
            <h3>Arusa</h3>
            <ul>
                <li><Link onClick={bothActions} style={{textDecoration:'none', color:'#000'}} to="/">Home</Link></li>
                <li><Link onClick={bothActions} style={{textDecoration:'none', color:'#000'}} to="/products" >Products</Link></li>
                <li><Link onClick={bothActions} style={{textDecoration:'none', color:'#000'}} to="/contact">Contact</Link></li>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Nav