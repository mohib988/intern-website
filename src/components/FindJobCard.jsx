import React from 'react'
import { GoLocation } from 'react-icons/go'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { BsClock } from 'react-icons/bs'



const FindJobCard = (props) => {
    return (
        <div className='find-job-card'>
            {/* <img src="https://xsgames.co/randomusers/avatar.php?g=female" alt="" className="cp-logo" />
            <h3 className="cp-name">Google</h3>
            <span className="cp-location">
                <GoLocation style={{ fill: '#abaaad' }} />
                <span>Karachi, PK</span>
            </span>
            <a className="cp-jobs">12 Jobs Open</a> */}
            <section className="fj-header">
                <img src={"http://localhost:5000/"+props.post.companyId.profilePicture} alt="" className="fj-logo" />
                <div className="fj-name-loc">
                    <h4 className="fj-name">{props.post.jobTitle}</h4>
                    <span className="fj-loc"><GoLocation style={{fill: '#abaaad'}} /> {props.post.location}</span>
                </div>
            </section>
            <section className="fj-body">
            <h4 className="fj-title">{props.post.jobTitle}</h4>
                <section className="fj-details">
                    <span className="fj-allowance"><AiOutlineClockCircle style={{fill: '#abaaad'}} />{props.post.paid?"paid":"Unpaid"}</span>
                    <span className="fj-time"><BsClock style={{fill: '#abaaad'}} /> Months</span>
                </section>
            </section>
            <p className="fj-summary">{props.post.jobDescription}</p>
            <section className="fj-skills-req">
                <section className="candidate-card-skills">
                    {/* {props.post.skill.map((i,j)=>{
                        return <span  key={j}className='skill-tag'>{i}</span>
                    })

                    } */}
                  
                </section>
            </section>
                <section className="fj-footer">
                    <div className="fj-pay">
                        $
                        {props.post.paid?props.post.price:0}<sub>/Hour</sub></div>
                    <a className="fj-apply">Apply Now</a>
            </section>
        </div>
    )
}

export default FindJobCard