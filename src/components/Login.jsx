import React from 'react'
import { AiOutlineLogin } from 'react-icons/ai'

const Login = () => {
  return (
    <div className="register-wrapper">
        <div className="register-container">
            <section className="register-details">
                <a className="navbar-logo register-logo" href='/'>
                    C<span className='h'>h</span><span className='underline'>akr</span><span className='i'>i</span>
                </a>
                <h2 className='register-header'>
                    Sign in for Chakri
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
                    <span className="email-register-header">Or sign in with e-mail</span>
                </span>
                <form className="register-form">
                    <input type="email" className="register-input" placeholder="Email" />
                    <input type="password" className="register-input" placeholder="Password" />
                    <button className="register-btn"><AiOutlineLogin style={{fill: "white"}} className='user-logo' />Sign In</button>
                </form>
                <span className="register-footer">Not Registered Yet? <a href="/login">Sign up</a></span>
            </section>
            <section className="register-illustration">
                <img src="https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg" alt="" className="register-illustration-img" />
            </section>
        </div>
    </div>
  )
}

export default Login