import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        C<span className='h'>h</span><span className='underline'>akr</span><span className='i'>i</span>
      </div>
      <div className="navbar-links">
        <ul>
          <li><a href='/home'>Home</a></li>
          <li><a href='#'>Find A Job</a></li>
          <li><a href='#'>Recruiters</a></li>
          <li><a href='#'>Candidates</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
      </div>
      <Link className="navbar-register" to='/register'>Register</Link>
    </nav>
  )
}

export default Navbar