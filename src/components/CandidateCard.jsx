import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { url } from '../assets/url'
import ReactLoading from "react-loading"
import { useSelector } from 'react-redux'
const CandidateCard = (props) => {
    const {  isLoading } = useSelector(state => state.centralStore)
    if (isLoading) {
        return <ReactLoading color='black' type="spin" height={337} width={115} />
      }
    
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
               {props.profile.skillAndSummary[0]?.summary}
            </p>
            <section className="candidate-card-skills">
                {
                    props.profile.skillAndSummary[0]?.skill ?
                    (props.profile.skillAndSummary[0]?.skill).map((i,j)=>{
                       return <span className='skill-tag' key={j}>{i}</span>
                    })
:<></>
                }
              
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