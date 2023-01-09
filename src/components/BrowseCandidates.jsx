import React from 'react'
import CdAndCpHeader from './CdAndCpHeader'
import CandidateCard from './CandidateCard'
import Pagination from './Pagination'
import ReactLoading from "react-loading"
import { useLocation, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllCandidate } from '../actions/user.js'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const BrowseCandidates = () => {
  const dispatch = useDispatch()
  const { candidates, isLoading } = useSelector(state => state.centralStore)
  const query = useQuery()
  const page = query.get('page') || 1

  useEffect(() => {
    dispatch(getAllCandidate(page))
  }, [page])

  if (isLoading) {
    return <ReactLoading color='black' type="spin" height={337} width={115} />
  }

  return (
    <div className="browse-candidates-container">
      <CdAndCpHeader type="candidates" />
      <p className="candidates-shown">Showing <span>41-60</span> of <span>944</span> jobs</p>
      <section className="browse-candidates-grid">
        {candidates.map((i) => {
          return <Link to={`${i.userId}`} style={{ textDecoration: 'none' }} ><CandidateCard profile={i} /></Link>
        })

        }

      </section>
      <Pagination number={5} type={"candidates"} />
    </div>
  )
}

export default BrowseCandidates