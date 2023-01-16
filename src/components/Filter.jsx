import React from 'react'
import {useState} from 'react'

function Filter({title, section}) {
    const [Dropdown,setDropdown] = useState(true);
  return (
    <>
        <div onClick={() =>  setDropdown(!Dropdown)} className="firstFilter">
            <p>{title}</p>
            <div className={Dropdown ? 'filtersBy inactive' : 'filtersBy'}>
                {section.map((item) => {
                    return <p>{item}</p>
                })}
            </div>
        </div>
    </>
  )
}

export default Filter