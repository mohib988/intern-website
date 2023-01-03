import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'

const CandidateCard = () => {
  return (
    <>
        <div className="candidate-card">
            <section className="candidate-card-header">
                <img src="https://xsgames.co/randomusers/avatar.php?g=female" alt="" className="candidate-card-img" />
                <div className="candidate-card-details">
                    <h2 className="candidate-card-name">John Doe</h2>
                    <span className='candidate-card-position'>UI/UX Designer</span>
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
                <div className="candidate-location"><GoLocation style={{fill: '#abaaad'}} />Karachi</div>
                <div className="candidate-pay"><AiOutlineClockCircle style={{fill: '#abaaad'}} />$45/hour</div>
            </section>
        </div>
    </>
  )
}

export default CandidateCard