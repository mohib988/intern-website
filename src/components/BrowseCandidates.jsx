import React from 'react'
import CdAndCpHeader from './CdAndCpHeader'
import CandidateCard from './CandidateCard'
import Pagination from './Pagination'

const BrowseCandidates = () => {
  return (
    <div className="browse-candidates-container">
        <CdAndCpHeader type="candidates" />
        <p className="candidates-shown">Showing <span>41-60</span> of <span>944</span> jobs</p>
        <section className="browse-candidates-grid">
            <CandidateCard />
            <CandidateCard />
            <CandidateCard />
            <CandidateCard />
            <CandidateCard />
            <CandidateCard />
            <CandidateCard />
            <CandidateCard />
        </section>
        <Pagination  number={5}/>
    </div>
  )
}

export default BrowseCandidates