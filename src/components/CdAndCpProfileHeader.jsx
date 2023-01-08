import React from 'react'
import { FiDownload } from 'react-icons/fi'
import { GoLocation } from 'react-icons/go'
import { BsTelephone } from 'react-icons/bs'

const CdAndCpProfileHeader = (props) => {
    return (
        <>
            <img src={"http://localhost:5000/"+(props.profile?.type ==="candidate" ?props.profile.profilePicture:props.profile.companyPicture)} className="cp-cover-img"></img>
            <div className="profile-header">
                <div className="profile-header-left">
                    <img src={"http://localhost:5000/"+
                    props.profile?.profilePicture} alt="" className="profile-pic" />
                    <div className="profile-name-pos">
                        <h3 className="profile-name">{props.profile?.name}</h3>
                        {props.profile.type === 'candidate' ? 
                        
                        <span className="profile-pos">{props.profile?.field}</span> 
                        
                        : <span className="profile-tagline">{props.profile?.companyDomain}</span>}  
                        <span className="profile-loc"><GoLocation style={{ fill: '#abaaad' }} />{props.profile?.address}</span>
                    </div>
                </div>
                <div className="profile-header-right">
                    {props.profile.type === 'candidate' ? 
                    <button className="download-cv"><FiDownload className='download' /> Download CV</button> 
                    
                     : <button className="contact-us"><BsTelephone className='phone' /> Contact Us</button> }  
                </div>
            </div>
        </>
    )
}

export default CdAndCpProfileHeader