import React from 'react'
import CandidateCard from './CandidateCard'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const BrowseCandidates = () => {
  const charArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  return (
    <div className="browse-candidates-container">
        <section className="browse-candidates-header">
            <h2>Browse Candidates</h2>
            <p className='browse-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni,<br /> atque delectus molestias quis?
            </p>
            <div className="box-character">
                <ul className="box-character-list">
                    {charArray.map((char) => (<li key={Math.random()}>{char}</li>))}
                </ul>
            </div>
        </section>
        <p className="candidates-shown">Showing <span>41-60</span> of <span>944</span> jobs</p>
        <section className="browser-candidates-grid">
            <CandidateCard />
            <CandidateCard />
            <CandidateCard />
            <CandidateCard />
            <CandidateCard />
            <CandidateCard />
            <CandidateCard />
            <CandidateCard />
        </section>
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
    </div>
  )
}

export default BrowseCandidates