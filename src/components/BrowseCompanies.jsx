import React from 'react'
import CardsGrid from './CardsGrid'
import CdAndCpHeader from './CdAndCpHeader'
import Filter from './Filter'
import CompanyCard from './CompanyCard'
import { useDispatch,useSelector} from 'react-redux'
import {  useLocation } from 'react-router-dom';
import { useEffect } from 'react'
import { getAllCompany } from '../actions/company'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const BrowseCompanies = () => {

 const dispatch=useDispatch()
 const {companies}=useSelector(state=>state.centralStore)
const query=useQuery()
const page=query.get('page')||1

 useEffect(()=>{
dispatch(getAllCompany(page))
 },[page])

//  if()
    return (
    <div className='browse-companies-container'>
        <CdAndCpHeader type="companies" />
        <section className="filter-cards-grid">
            <Filter />

            <CardsGrid cardType=
            {<CompanyCard />}
            qty={8} /> 
         
      
        </section>
    </div>
  )
}

export default BrowseCompanies
