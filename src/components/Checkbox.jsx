import React from 'react'

const Checkbox = ({industry, number, defaultChecked, label}) => {
  return (
    <>
      <li>
        <div className="cb-container">
          <input type="checkbox" id={label} className='cb' defaultChecked={defaultChecked} />
          <label htmlFor={label}>{industry}</label>
        </div>
        <span className="cb-item-number">{number}</span>
      </li> 
    </>
  )
}

export default Checkbox