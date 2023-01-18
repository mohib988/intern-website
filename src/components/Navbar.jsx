import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Navbar = () => {
const navigate=useNavigate()
  const user=JSON.parse(localStorage.getItem("profile"))?.user
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
          { 
          user?
          user?.type=="user" ?
          <li><Link to={`/candidates/${user?._id}`}>your Profile</Link></li> : <li><Link to={`/companies/${user?._id}`}>your Profile</Link></li>
        :  <div></div>}
          </ul>
      </div>
      {!user?
      <Link className="navbar-register" to='/register'>Register</Link>
    : <button className="navbar-register" onClick={()=>{
      localStorage.clear()
      navigate("/login")
    }}>Logout</button>}
    </nav>
  )
}

export default Navbar