import React from 'react'
import CardsGrid from './CardsGrid'
import Filter from './Filter'

import FindJobCard from './FindJobCard'
import { useDispatch,useSelector} from 'react-redux'
import {  useLocation } from 'react-router-dom';
import { useEffect } from 'react'
import {getAllPost} from '../actions/jobPost.js'
import ReactLoading from "react-loading"
function useQuery() {
  return new URLSearchParams(useLocation().search);}

const FindJob = () => {
  
  const sample={title:"react developer",requirement:"very good boy with the handful of experience in the react and its lib",skill:["programmer","developer","skillful"],companyName:"google",month:2,paid:true,remote:true,address:"karachi,pakistan",price:300}


    const dispatch=useDispatch()
    const {posts,isLoading}=useSelector(state=>state.centralStore)
   const query=useQuery()
   const page=query.get('page')||1
   
    useEffect(()=>{
   dispatch(getAllPost(page))
    },[page])
    if(isLoading){
      return   <ReactLoading color='black' type="spin" height={337} width={115} />
    }

  return (
    <div className='find-job-container'>
        <section className="find-job-grid">
            <Filter />
            <CardsGrid  tomap={posts} type={"job"} />
        </section>
    </div>
  )
}

export default FindJob