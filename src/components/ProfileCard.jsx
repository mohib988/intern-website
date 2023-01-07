import React from 'react'
import { FcGoogle } from 'react-icons/fc'

const ProfileCard = ({logo, title, loc, cpName, time, desc}) => {
    return (
        <>
            <section className="pf-card">
                <div className="pf-logo">
                    {logo}
                </div>
                <div className="pf-details">
                    <section className="pf-top">
                        <div className="pf-title-loc-company">
                            <h4>{title}</h4>
                            <span>{loc} &#x2022; {cpName}</span>
                        </div>
                        <span className="pf-work-time">{time}</span>
                    </section>
                    <p className="pf-bottom">{desc}</p>
                </div>
            </section>
        </>
    )
}

export default ProfileCard