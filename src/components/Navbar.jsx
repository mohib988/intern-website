import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("profile"))?.user;

  // Event handler to close the drawer when a link is clicked
  const handleLinkClick = () => {
    setIsDrawerOpen(true);
  };

  return (
    <nav className="navbar-container">
      <Link to="/" className="navbar-logo">
        <span className='h'>C</span><span className='underline'>areer</span><span className='i'>Se</span>
      </Link>
      <div
        className={`navbar-links ${isDrawerOpen ? 'navbar-links-open' : ''}`}
      >
        <ul>
          <li><Link to="/job" onClick={handleLinkClick}>Find A Job</Link></li>
          <li><Link to="/companies" onClick={handleLinkClick}>Recruiters</Link></li>
          <li><Link to="/candidates" onClick={handleLinkClick}>Candidates</Link></li>
          {user && (
            <li><Link to={`/candidates/${user._id}`} onClick={handleLinkClick}>Profile</Link></li>
          )}
          {user && user.type === "user" && (
            <li><Link to={`/candidates/${user._id}`} onClick={handleLinkClick}>Your Profile</Link></li>
          )}
          {user && user.type !== "user" && (
            <li><Link to={`/companies/${user._id}`} onClick={handleLinkClick}>Your Profile</Link></li>
          )}
        </ul>
      </div>
      {!user ? (
        <Link className="navbar-register" to='/register'>Register</Link>
      ) : (
        <button className="navbar-register" onClick={() => {
          localStorage.clear();
          navigate("/login");
        }}>Logout</button>
      )}
      <div
        className={`overlay ${isDrawerOpen ? 'active' : ''}`}
        onClick={toggleDrawer}
      ></div>
      <div className={`hamburger-icon ${isDrawerOpen ? 'hb-active' : ''}`} onClick={toggleDrawer} style={{ zIndex: "1000" }}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
}

export default Navbar;
