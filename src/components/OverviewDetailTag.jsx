import React from 'react'

const OverviewDetailTag = ({logo: Logo, title, value}) => {
  return (
    <>
        <div className='od-container'>
            {Logo}
            <div className="od-details">
                <span className='od-title'>{title}</span>
                <span className='od-value'>{value}</span>
            </div>
        </div>
    </>
  )
}

export default OverviewDetailTag