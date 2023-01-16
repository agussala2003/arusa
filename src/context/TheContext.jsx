import React, { useState } from 'react'
import {createContext} from 'react'
import {insumos, articulos} from '../Insumos'

export const TheContext = createContext()
const newLetters = []
const newPrices = []
insumos.forEach(item => newPrices.push(item.price))
insumos.forEach(item => newLetters.push(item.product))

// Development for low to high prices

const pricesLow = newPrices.sort()
const lenght =  pricesLow.length 
let lowtohigh2 = []
function LowtoHighfn () {
  for (let i = 0; i < pricesLow.length; i++) {
    lowtohigh2.push(insumos.find(o => o.price == pricesLow[i]))
  }
  return lowtohigh2
}
lowtohigh2 = LowtoHighfn()

// Development for High to low prices

const pricesHigh = newPrices.sort()
let pricesHigh2 = []
function Hightolowfn () {
  for (let i = 0; i < lenght; i++) {
    let max = pricesHigh.pop()
    pricesHigh2.push(insumos.find(o => o.price == max))
  }
  return pricesHigh2
}
pricesHigh2 = Hightolowfn()

// Development for A to Z products

const AtoZArray = newLetters.sort()
let AtoZArray2 = []
function AtoZfn () {
  for (let i = 0; i < AtoZArray.length; i++) {
    AtoZArray2.push(insumos.find(o => o.product == AtoZArray[i]))
  }
  return AtoZArray2
}
AtoZArray2 = AtoZfn()

// Development for Z to A products

const ZtoArray = newLetters.sort()
let ZtoArray2 = []
function Ztofn () {
  for (let i = 0; i < lenght; i++) {
    let first = ZtoArray.pop()
    ZtoArray2.push(insumos.find(o => o.product == first))
  }
  return ZtoArray2
}
ZtoArray2 = Ztofn()

// Function to buy things

const CartItems = []
function addToCart (id) {
  CartItems.push(insumos.find(e => e.id === id))
  return CartItems
}



export function TheContextProvider (props) {
  return (
    <TheContext.Provider value={{
        insumos: insumos,
        articulos: articulos,
        fnLH: lowtohigh2,
        fnHL: pricesHigh2,
        fnAZ: AtoZArray2,
        fnZA: ZtoArray2,
        addToCartfn: addToCart
    }}>
        {props.children}
    </TheContext.Provider>
  )
}
