import React from 'react'
import { FiDownload } from 'react-icons/fi'
import { GoLocation } from 'react-icons/go'
import { BsTelephone } from 'react-icons/bs'

const CdAndCpProfileHeader = ({type, crPhoto, pfPhoto, name, pos, tagline, loc}) => {
    return (
        <>
            <img src={crPhoto} className="cp-cover-img"></img>
            <div className="profile-header">
                <div className="profile-header-left">
                    <img src={pfPhoto} alt="" className="profile-pic" />
                    <div className="profile-name-pos">
                        <h3 className="profile-name">{name}</h3>
                        {type === 'candidate' ? <span className="profile-pos">{pos}</span> : <span className="profile-tagline">{tagline}</span>}
                        <span className="profile-loc"><GoLocation style={{ fill: '#abaaad' }} />{loc}</span>
                    </div>
                </div>
                <div className="profile-header-right">
                    {type === 'candidate' ? <button className="download-cv"><FiDownload className='download' /> Download CV</button> : <button className="contact-us"><BsTelephone className='phone' /> Contact Us</button> } 
                </div>
            </div>
        </>
    )
}

export default CdAndCpProfileHeader