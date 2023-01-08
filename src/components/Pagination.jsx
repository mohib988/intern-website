import React from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { getAllPost } from '../actions/jobPost.js'

const Pagination = ({number}) => {
  const dispatch=useDispatch()
  return (
    <>
        <section className="pagination">
            <FaAngleLeft className='pg-icon' />
            <ul className="pagination-list">    
                { Array(number).fill().map((i,j)=> 
                 <li  key={j}onClick={()=>{
                   dispatch(getAllPost(j+1))
                  }}>{j+1}</li>
              )}
            </ul>
            <FaAngleRight className='pg-icon' />
        </section>
    </>
  )
}

export default Pagination