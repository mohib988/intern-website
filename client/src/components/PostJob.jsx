import React from 'react'
import { AiOutlineUpload } from 'react-icons/ai'

const PostJob = () => {
  return (
    <div className="post-job-container">
        <div className="post-job-image">
            <img src="src/assets/illustration.png" alt="Not Found" />
        </div>
        <div className="post-job-details">
            <h2>Get Matched With The Most<br /> Valuable Candidates, Just <span>Post<br /> a Job</span> at Chakri</h2>
            <p>Post a job and get matched with the most valuable candidates. Chakri is the best job portal in Bangladesh. Post a job and get matched with the most valuable candidates. Chakri is the best job portal in Bangladesh.</p>
            <button className='post-job-btn'><AiOutlineUpload className='post-icon' />Post a Job</button>
        </div>
    </div>
  )
}

export default PostJob