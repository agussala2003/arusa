import React, {useContext} from 'react'
import { useParams, Link } from 'react-router-dom'
import {TheContext} from '../context/TheContext'

function ArticleSection() {
    const t = useContext(TheContext)
    const {ide} = useParams()
    const item = t.articulos.find((item) => item.id == ide)
  return (
    <>
      <div className='productBanner articleBanner'>
          <h1>{item.title}</h1>
      </div>
      <div className='line'>
        <p>Read our new article</p>
      </div>
      <div className="contentArticle">
        <div className="articleImg">
          <img src={item.img} alt="" />
        </div>
        <div className="articleContent">
          <h1>{item.title}</h1>
          <p>{item.p}</p>
          <p>{item.p}</p>
        </div>
      </div>
      <div className="contentArticle contentArticle2">
        <div className="articleImg">
          <img src={item.img} alt="" />
        </div>
        <div className="articleContent">
          <h1>{item.title}</h1>
          <p>{item.p}</p>
          <p>{item.p}</p>
        </div>
      </div>
      <div className="buttonContainer">
        <Link onClick={() => window.scrollTo(0, 0)} to="/arusa/products" style={{color:'#fff', textDecoration:'none'}}><button className='articleButton'>Go shopping</button></Link>
      </div>
    </>
  )
}

export default ArticleSection