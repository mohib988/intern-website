import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
const navigate=useNavigate()
  const user=JSON.parse(localStorage.getItem("profile"))?.user
  return (
    <nav className="navbar-container">
      <Link to="/" className="navbar-logo">
        <span className='h'>C</span><span className='underline'>areer</span><span className='i'>Se</span>
      </Link>
      <div className="navbar-links">
        <ul>
          <li><Link to="/job">Find A Job</Link></li>
          <li><Link to="/companies">Recruiters</Link></li>
          <li><Link to="/candidates">Candidates</Link></li>
<<<<<<< HEAD
<<<<<<< HEAD
          { user ?
          <li><Link to={`/candidates/${user._id}`}>Profile</Link></li>
        :<div></div>}
=======
          { user?.type=="user" ?
          <li><Link to={`/candidates/${user?._id}`}>your Profile</Link></li>
        :  <div></div>}
>>>>>>> a77406839d5c0814ed856d73e1a2a0821999c2e5
=======
          { user?.type=="user" ?
          <li><Link to={`/candidates/${user?._id}`}>your Profile</Link></li>
        :  <div></div>}
>>>>>>> a77406839d5c0814ed856d73e1a2a0821999c2e5
          </ul>
      </div>
      {!user?
      <Link className="navbar-register" to='/register'>Register</Link>
    : <button className="navbar-register" onClick={()=>{
      localStorage.clear()
      navigate("/login")
    }}>Logout</button>}
      <div className="hamburger-icon hb-hidden hb-active"><GiHamburgerMenu /></div>
    </nav>
  )
}

export default Navbar