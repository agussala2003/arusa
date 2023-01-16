import React from 'react'
import {Link} from 'react-router-dom'

function IndividualArticle({item}) {
  return (
    <Link onClick={() => window.scrollTo(0, 0)} style={{textDecoration:'none'}} to={`/article/${item.id}`}>
      <div className='article'>
        <div className="infoArticle">
          <img src={item.img} alt="" />
          <div className="infoArticleText">
            <h3>{item.title}</h3>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default IndividualArticle