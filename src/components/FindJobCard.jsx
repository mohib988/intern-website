import React from 'react'
import { GoLocation } from 'react-icons/go'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { BsClock } from 'react-icons/bs'



const FindJobCard = ({post}) => {
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
                <img src="https://xsgames.co/randomusers/avatar.php?g=female" alt="" className="fj-logo" />
                <div className="fj-name-loc">
                    <h4 className="fj-name">{post.companyName}</h4>
                    <span className="fj-loc"><GoLocation style={{fill: '#abaaad'}} /> {post.address}</span>
                </div>
            </section>
            <section className="fj-body">
            <h4 className="fj-title">{post.title}</h4>
                <section className="fj-details">
                    <span className="fj-allowance"><AiOutlineClockCircle style={{fill: '#abaaad'}} />{post.paid?"paid":"Unpaid"}</span>
                    <span className="fj-time"><BsClock style={{fill: '#abaaad'}} />{post.month} Months</span>
                </section>
            </section>
            <p className="fj-summary">{post.requirement}</p>
            <section className="fj-skills-req">
                <section className="candidate-card-skills">
                    {post.skill.map((i)=>{
                        return <span className='skill-tag'>{i}</span>
                    })

                    }
                  
                </section>
            </section>
                <section className="fj-footer">
                    <div className="fj-pay">
                        $
                        {post.paid?post.price:0}<sub>/Hour</sub></div>
                    <a className="fj-apply">Apply Now</a>
            </section>
        </div>
    )
}

export default FindJobCard