import React from 'react';
import { FaSistrix } from 'react-icons/fa';
import { BsHandbag, BsGrid3X3Gap } from 'react-icons/bs';

const JobSearch = () => {
  return (
    <div className="job-search-container">
        <h1 className="job-search-header">
            Get The <span>Right Job </span><br />You Deserve
        </h1>
        <span className="total-jobs-listed">1,80,570 jobs listed here! Your dream job is waiting</span>
        <div className="job-search-input-container">
            <BsHandbag className='industry-logo' />
            <select name="industry" id="">
                <option value="industry">Industry</option>
                <option value="software">Software</option>
                <option value="finance">Finance</option>
                <option value="recruiting">Recruiting</option>
                <option value="management">Management</option>
                <option value="advertising">Advertising</option>
                <option value="development">Development</option>
            </select>
            <BsGrid3X3Gap className='keyword-logo' />
            <input type="text" className="job-search-keyword" placeholder='Your Keyword...' />
            <button className='job-search-button'> <FaSistrix className='search-logo' /> Search</button>
        </div>
    </div>
  )
}

export default JobSearch