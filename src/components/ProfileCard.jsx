// will add location here
import ReactLoading from 'react-loading';
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
                            <h4>{props.prop.instituteName ||"No Data"}</h4>
                            <span>pakistan &#x2022;</span>
                        </div>
                        <span className="pf-work-time">{ props.prop.startingDate.substring(0,4)+"-"+props.prop.endingDate.substring(0,4)||"No Data"
                        }</span>
                    </section>
                    <p className="pf-bottom">{props.prop.description ||"No Data"}</p>
                </div>
            </section>
        </>
    )
}

export default ProfileCard