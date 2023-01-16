import React from 'react'
import {useContext} from 'react'
import {Link} from 'react-router-dom'
import {TheContext} from '../context/TheContext'

function Individual() {
    const y = useContext(TheContext)
    const id = y.insumos.find(item => item.id == 5).id
  return (
    <>
        <div className="individualContainer">
            <div className="infoContainer">
                <h3>Native Light Chair</h3>
                <p>Refinement Chair with Ripped Seat, made of retro Eucalyptus wood, of great resistance, Kiln dried, made with a spike system and painted with P.U. (Polyurethane) With its entire structure painted in wood, it offers a lot of elegance to your environment and when cleaning is very easy, as it is washable and light for movement. Enough of receiving visitors and not having a place to accommodate them. With the chair, your days as a host will be marked by a lot of elegance and sophistication.</p>
                <Link className='linksFooter' onClick={() => window.scrollTo(0, 0)} style={{textDecoration:'none', color:'#fff'}} to={`/item/${id}`}>View Product</Link>
            </div>
            <div className="productimg">
                <img src={y.insumos.find(item => item.id == 5).img} alt="" />
            </div>
        </div>
    </>
  )
}

export default Individual