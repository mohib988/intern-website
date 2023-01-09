
//need to make jobs open
import React from 'react'
import { GoLocation } from 'react-icons/go'

const CompanyCard = ({company}) => {
  return (
    <>
        <div className="cp-card">
            <img src="https://xsgames.co/randomusers/avatar.php?g=female" alt="" className="cp-logo" />
            <h3 className="cp-name">Google</h3>
            <span className="cp-location">
                <GoLocation style={{fill: '#abaaad'}} />
                <span>Karachi, PK</span>
            </span>
            <a className="cp-jobs">12 Jobs Open</a>
        </div>
    </>
  )
}

export default CompanyCard