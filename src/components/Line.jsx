import React from 'react'

function Line({text1,text2}) {
  return (
    <div className='interline'>
        <p>{text1}</p>
        <p>{text2}</p>
    </div>
  )
}

export default Line