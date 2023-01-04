import React from 'react'
import CardsGrid from './CardsGrid'
import Filter from './Filter'
import FindJobCard from './FindJobCard'

const FindJob = () => {
  return (
    <div className='find-job-container'>
        <section className="find-job-grid">
            <Filter />
            <CardsGrid cardType={<FindJobCard />} qty={8} grid="grid" />
        </section>
    </div>
  )
}

export default FindJob