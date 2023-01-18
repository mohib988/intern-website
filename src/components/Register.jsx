import React from 'react'
import { FaUserPlus } from 'react-icons/fa'

const Register = () => {
  return (
    <div className="register-wrapper">
        <div className="register-container">
            <section className="register-details">
                <a className="navbar-logo register-logo" href='/'>
                    <span className='h'>C</span><span className='underline'>areer</span><span className='i'>Se</span>
                </a>
                <h2 className='register-header'>
                    Sign up for CareerSe
                </h2>
                <button className="register-google-btn">
                    <div className="google-logo">
                        <img src="https://img.icons8.com/fluency/48/null/google-logo.png" alt="" className="google-logo" />
                    </div>
                    Sign in with Google
                </button>
                <button className="register-facebook-btn">
                    <div className="facebook-logo">
                        <img src="https://img.icons8.com/fluency/48/null/facebook-new.png" alt="" className="facebook-logo" />
                    </div>
                    Sign in with Facebook
                </button>
                <span className="border">
                    <span className="email-register-header">Or sign up with e-mail</span>
                </span>
                <form className="register-form">
                    <input type="text" className="register-input" placeholder="Username" />
                    <input type="email" className="register-input" placeholder="Email" />
                    <input type="password" className="register-input" placeholder="Password" />
                    <input type="password" className="register-input" placeholder="Confirm Password" />
                    <select name="register_type" id="register_type">
                        <option value="candidate">Candidate</option>
                        <option value="recruiter">Recruiter</option>
                    </select>
                    <button className="register-btn"><FaUserPlus style={{fill: "white"}} className='user-logo' />Sign Up</button>
                </form>
                <span className="register-footer">Already have an account? <a href="/login">Log in</a></span>
            </section>
            <section className="register-illustration">
                <img src="https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg" alt="" className="register-illustration-img" />
            </section>
        </div>
    </div>
  )
}

export default Register