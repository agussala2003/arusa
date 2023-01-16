import React, { useState,useContext } from 'react'
import {TheContext} from '../context/TheContext'

function ItemCartDetail({item,fn}) {
  const x = useContext(TheContext)
  const ancho = window.innerWidth > 1400
  return (
    <div className='itemCartDetail'>
      { ancho ? <img src={item.img} alt="" /> : <div className="imageContainer">
        <img src={item.img} alt="" />
      </div> }
        <div className="infoCart">
            <h3>{item.product}</h3>
            <p>{item.desc}</p>
            <p>${item.price}</p>
        </div>
        <div className='trashContainer'>
            <i onClick={() => fn(item.id)} className='bx bxs-trash'></i>
        </div>
    </div>
  )
}

export default ItemCartDetail