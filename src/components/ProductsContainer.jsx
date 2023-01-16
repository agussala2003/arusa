import React from 'react'
import {useContext,useState} from 'react'
import {TheContext} from '../context/TheContext'
import Product from './Product'


function ProductsContainer() {
    const [Dropdown2,setDropdown2] = useState(true);
    const [lh,setlh] = useState(false);
    const [hl,sethl] = useState(false);
    const [az,setaz] = useState(false);
    const [za,setza] = useState(false);
    const z = useContext(TheContext)
  return (
    <>
        <div className='productBanner'>
            <h1>Explore our products</h1>
        </div>
        <div className="allProducts">
            <h3>All Products</h3>
        </div>
        <div className="allProducts allProducts2">
            <div className="allProductsInfo">
                <p>{z.insumos.length} Products</p>
            </div>
        </div>
        <div className="productShow">
            <div className="filterSection">
                <div className="firstFilter">
                    <p onClick={() =>  setDropdown2(!Dropdown2)}>Sort by <i className={Dropdown2  ? 'bx bxs-caret-down-circle' : 'bx bxs-caret-down-circle lookup'} ></i></p>
                    <div className={Dropdown2 ? 'filtersBy inactive' : 'filtersBy'}>
                        <p className={lh ? 'active' : ''} onClick={() => setlh(!lh)}>price: low to high <i className={lh ? 'bx bx-x-circle' : 'disabled'}></i></p>
                        <p className={hl ? 'active' : ''} onClick={() => sethl(!hl)}>price: high to low <i className={hl ? 'bx bx-x-circle' : 'disabled'}></i></p>
                        <p className={az ? 'active' : ''} onClick={() => setaz(!az)}>a-z <i className={az ? 'bx bx-x-circle' : 'disabled'}></i></p>
                        <p className={za ? 'active' : ''} onClick={() => setza(!za)}>z-a <i className={za ? 'bx bx-x-circle' : 'disabled'}></i></p>
                    </div>
                </div>
            </div>
            <div className="theProducts">
            {   
                lh ? z.fnLH.map((item) => {
                    if (item.id <= 16){
                    return <Product key={item.id} item={item}/>
                    }
                }) : hl ? z.fnHL.map((item) => {
                    if (item.id <= 16){
                    return <Product key={item.id} item={item}/>
                    }
                }) : az ? z.fnAZ.map((item) => {
                    if (item.id <= 16){
                    return <Product key={item.id} item={item}/>
                    }
                }) : za ? z.fnZA.map((item) => {
                    if (item.id <= 16){
                    return <Product key={item.id} item={item}/>
                    }
                }) : z.insumos.map((item) => {
                    return <Product key={item.id} item={item}/>
                })
            }
            </div>
        </div>
    </>
  )
}

export default ProductsContainer