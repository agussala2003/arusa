import React from 'react'
import Product2 from './Product2'
import {useContext} from 'react'
import {TheContext} from '../context/TheContext'

function Banner() {
  const y = useContext(TheContext)
  const item1 = y.insumos.find(item => item.id == 6)
  const item2 = y.insumos.find(item => item.id == 7)
  
  return (
    <>
    <div className='bannerContainer'>
        <Product2 item={item1} key={item1.id}/>
        <Product2 item={item2} key={item2.id}/>
    </div>
    </>
  )
}

export default Banner