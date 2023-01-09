import React from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getAllPost } from '../actions/jobPost.js'

const Pagination = ({number,type}) => {
  const dispatch=useDispatch()
  return (
    <>
        <section className="pagination">
            <FaAngleLeft className='pg-icon' />
            <ul className="pagination-list">    
                { Array(number).fill().map((i,j)=> 
                 <Link to={`/${type}/?page=${j+1}`} > {j+1}<li key={j} ></li></Link>
              )}
            </ul>
            <FaAngleRight className='pg-icon' />
        </section>
    </>
  )
}

export default Pagination