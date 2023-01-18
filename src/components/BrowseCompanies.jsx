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
const search=query.get('search')

 useEffect(()=>{
  if(search){
    let type="search"
    dispatch(getAllCompany(search,type))
  }else{
    
    let type="page"
    dispatch(getAllCompany(page))
  }
 },[page,search])

//  if()
    return (
    <div className='browse-companies-container'>
        <CdAndCpHeader type="companies" />
        <section className="filter-cards-grid">
            <Filter />

            <CardsGrid  tomap={companies} type={"companies"}/> 
         
      
        </section>
    </div>
  )
}

export default BrowseCompanies
