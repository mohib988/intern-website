import React from 'react'
import { FaBullhorn } from 'react-icons/fa'

const FeaturedJobsCard = ({logo, name, location, position, schedule, salary}) => {
  return (
    <div className="featured-jobs-card">
        <section className="featured-jobs-card-header">
            <img className="featured-jobs-card-logo" src={logo}></img>
            <section className="company-details">
                <span className='company-name'>{name}</span>
                <span className='company-location'>{location}</span>
            </section>
        </section>
        <section className="featured-jobs-card-details">
            <span className="job-position">{position}</span>
            <span className="job-schedule">{schedule}</span>
        </section>
        <section className="featured-jobs-card-footer">
            <span className='job-salary'>${salary}<span>month</span></span>
            <button className="job-details-btn">Details</button>
        </section>
    </div>
  )
}

export default FeaturedJobsCard