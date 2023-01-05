import React from 'react'
import CardsGrid from './CardsGrid'
import CdAndCpHeader from './CdAndCpHeader'
import Filter from './Filter'
import CompanyCard from './CompanyCard'

const BrowseCompanies = () => {

    return (
    <div className='browse-companies-container'>
        <CdAndCpHeader type="companies" />
        <section className="filter-cards-grid">
            <Filter />
            <CardsGrid cardType={<CompanyCard />} qty={8} />
        </section>
    </div>
  )
}

export default BrowseCompanies
