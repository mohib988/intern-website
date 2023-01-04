import React from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const Pagination = () => {
  return (
    <>
        <section className="pagination">
            <FaAngleLeft className='pg-icon' />
            <ul className="pagination-list">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
            </ul>
            <FaAngleRight className='pg-icon' />
        </section>
    </>
  )
}

export default Pagination