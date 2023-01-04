import React from 'react'
import { GoLocation } from 'react-icons/go'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { BsClock } from 'react-icons/bs'

const FindJobCard = () => {
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
                    <h4 className="fj-name">LinkedIn</h4>
                    <span className="fj-loc"><GoLocation style={{fill: '#abaaad'}} /> Karachi, PK</span>
                </div>
            </section>
            <section className="fj-body">
                <h4 className="fj-title">UI/UX Design Intern</h4>
                <section className="fj-details">
                    <span className="fj-allowance"><AiOutlineClockCircle style={{fill: '#abaaad'}} />Paid</span>
                    <span className="fj-time"><BsClock style={{fill: '#abaaad'}} />2 Months</span>
                </section>
            </section>
            <p className="fj-summary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut saepe corrupti alias harum esse totam.</p>
            <section className="fj-skills-req">
                <section className="candidate-card-skills">
                    <span className='skill-tag'>Figma</span>
                    <span className='skill-tag'>Adobe XD</span>
                    <span className='skill-tag'>PSD</span>
                    <span className='skill-tag'>App</span>
                    <span className='skill-tag'>Digital</span>
                </section>
            </section>
                <section className="fj-footer">
                    <div className="fj-pay">$500<sub>/Hour</sub></div>
                    <a className="fj-apply">Apply Now</a>
            </section>
        </div>
    )
}

export default FindJobCard