import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { url } from '../assets/url'

const CandidateCard = (props) => {
  return (
    <>
        <div className="candidate-card">
            <section className="candidate-card-header">
                <img src={url+"/"+props.profile.profilePicture} alt="" className="candidate-card-img" />
                <div className="candidate-card-details">
                    <h2 className="candidate-card-name">{props.profile.name}</h2>
                    <span className='candidate-card-position'>{props.profile.field}</span>
                </div>
            </section>
            <p className="candidate-card-summary">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut culpa eaque blanditiis voluptatem? Enim, veniam!
            </p>
            <section className="candidate-card-skills">
                <span className='skill-tag'>Figma</span>
                <span className='skill-tag'>Adobe XD</span>
                <span className='skill-tag'>PSD</span>
                <span className='skill-tag'>App</span>
                <span className='skill-tag'>Digital</span>
            </section>
            <section className="candidate-card-footer">
                <div className="candidate-location"><GoLocation style={{fill: '#abaaad'}} />{props.profile.name}</div>
                <div className="candidate-pay"><span> {props.profile.gender}</span></div>
            </section>
        </div>
    </>
  )
}

export default CandidateCard