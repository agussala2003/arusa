import React from 'react';
import {useParams} from "react-router-dom";
import {useContext} from 'react';
import {TheContext} from '../context/TheContext'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
    const t = useContext(TheContext)
    const {id} = useParams()
    const item = t.insumos.find((item) => item.id == id)
  return (
    <>
        <div className="productBanner">
            <h1>Don't miss out on this amazing price</h1>
        </div>
        <ItemDetail item={item}/>
    </>
  )
}

export default ItemDetailContainer