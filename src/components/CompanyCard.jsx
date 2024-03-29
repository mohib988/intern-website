
//need to make jobs open
import { url } from '../assets/url'
import React from 'react'
import { GoLocation } from 'react-icons/go'

const CompanyCard = (props) => {
  return (
    <>
        <div className="cp-card">
            <img src={url+"/"+props.company.profilePicture} alt="" className="cp-logo" />
            <h3 className="cp-name">{props.company.name}</h3>
            <span className="cp-location">
                <GoLocation style={{fill: '#abaaad'}} />
                <span>{props.company.address}</span>
            </span>
            <a className="cp-jobs">{props.company.numberOfEmployee+" Employees"}</a>
        </div>
    </>
  )
}

export default CompanyCard