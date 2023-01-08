import React from 'react'
import CardsGrid from './CardsGrid'
import CdAndCpHeader from './CdAndCpHeader'
import Filter from './Filter'
import CompanyCard from './CompanyCard'
import { useDispatch,useSelector} from 'react-redux'
import { useEffect } from 'react'
import { getAllCompany } from '../actions/company'

const BrowseCompanies = () => {

 const dispatch=useDispatch()
 const {companies}=useSelector(state=>state.centralStore)

 useEffect(()=>{
dispatch(getAllCompany(1))
 },[])
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
