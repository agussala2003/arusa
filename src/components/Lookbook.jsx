import React from 'react'
import Line from './Line'
import Product2 from './Product2'
import {useContext} from 'react'
import {TheContext} from '../context/TheContext'

function Lookbook() {
    const z = useContext(TheContext)
    const infoLookbook = [
        {
            category: 'Materials:',
            info: 'CERAMIC, GLASS, IRON, WOOD'
        },
        {
            category: 'Produced in:',
            info: 'CANADA, ITALY, UNITED STATES'
        },
        {
            category: 'CATEGORIES:',
            info: 'DECORATION, LAMP, FURNITURE'
        }
    ]
    function moviles () {
        if (window.innerWidth <= 768) {
            return <div className="fullContainer">
            <div className="lookbookContainer">
                <h3>Lookbook</h3>
                <p>The pieces stand out for their contemporary straight lines and imposing presence. Current, following the world trend of the great masters, the furniture stands out for its noble and innovative materials, composing sophisticated and exclusive environments.</p>
            </div>
            <div className="lineContainer">
                {
                    infoLookbook.map((item, index) => {
                        return <Line key={index} text1={item.category} text2={item.info}/>
                    } )
                }
            </div>
            <div className="productContainer">
                <Product2 item={z.insumos.find(item => item.id == 8)}/>
            </div>
        </div>
        }
        else {
            return <div className="fullContainer2">
                <div className="lookbookContainer2">
                    <h3>Lookbook</h3>
                    <p>The pieces stand out for their contemporary straight lines and imposing presence. Current, following the world trend of the great masters, the furniture stands out for its noble and innovative materials, composing sophisticated and exclusive environments.</p>
                </div>
            <div className='lookbookContainer3'>
                <div className="productContainer">
                    <Product2 item={z.insumos.find(item => item.id == 8)}/>
                </div>
                <div className="lineContainer">
                    {
                        infoLookbook.map((item, index) => {
                            return <Line key={index} text1={item.category} text2={item.info}/>
                        } )
                    }
                </div>
            </div>
        </div>
        }
    }
  return (
    <>
        {moviles()}
    </>
  )
}

export default Lookbook