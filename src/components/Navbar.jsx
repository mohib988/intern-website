import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <Link to="/" className="navbar-logo">
        C<span className='h'>h</span><span className='underline'>akr</span><span className='i'>i</span>
      </Link>
      <div className="navbar-links">
        <ul>
          <li><Link to="/job">Find A Job</Link></li>
          <li><Link to="/companies">Recruiters</Link></li>
          <li><Link to="/candidates">Candidates</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <Link className="navbar-register" to='/register'>Register</Link>
    </nav>
  )
}

export default Navbar