import React from 'react'

function Title({name, content}) {
  return (
    <div className={name}>{content}</div>
  )
}

export default Title