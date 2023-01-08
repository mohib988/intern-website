import React from 'react'
import CardsGrid from './CardsGrid'
import Filter from './Filter'
import FindJobCard from './FindJobCard'


const FindJob = () => {
  
  const sample={title:"react developer",requirement:"very good boy with the handful of experience in the react and its lib",skill:["programmer","developer","skillful"],companyName:"google",month:2,paid:true,remote:true,address:"karachi,pakistan",price:300}


  return (
    <div className='find-job-container'>
        <section className="find-job-grid">
            <Filter />
            <CardsGrid cardType={<FindJobCard post={sample} />} qty={8} grid="grid" />
        </section>
    </div>
  )
}

export default FindJob