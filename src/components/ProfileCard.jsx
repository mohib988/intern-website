import React from 'react'
import { FcGoogle } from 'react-icons/fc'

const ProfileCard = (props) => {

    return (
        <>
            <section className="pf-card">
                <div className="pf-logo">
                <FcGoogle />,
                </div>
                <div className="pf-details">
                    <section className="pf-top">
                        <div className="pf-title-loc-company">
                            <h4>{props.prop.instituteName}</h4>
                            <span>pakistan &#x2022; google</span>
                        </div>
                        <span className="pf-work-time">{ props.prop.startingDate.substring(0,4)+"-"+props.prop.endingDate.substring(0,4)
                        }</span>
                    </section>
                    <p className="pf-bottom">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius natus earum eveniet minus reiciendis rem enim fugiat ad laborum accusamus?</p>
                </div>
            </section>
        </>
    )
}

export default ProfileCard