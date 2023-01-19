import React from 'react'

const Footer = () => {
  return (
    <div className="footer-wrapper">
        <footer className="footer-container">
            <section className="footer-logo">
                <span className='h'>C</span><span className='underline'>areer</span><span className='i'>Se</span>
            </section>
            <section className="footer-nav">
                <ul>
                    <li><a href="">About</a></li>
                    <li><a href="">Press</a></li>
                    <li><a href="">Partner Relations</a></li>
                    <li><a href="">Blog</a></li>
                </ul>
            </section>
            <section className="footer-nav">
                <ul>
                    <li><a href="">Jobs</a></li>
                    <li><a href="">Job Referrals</a></li>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">Help</a></li>
                </ul>
            </section>
            <section className="footer-nav">
                <ul>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Help and Support</a></li>
                    <li><a href="">Affiliate</a></li>
                </ul>
            </section>
            <section className="footer-nav">
                <ul>
                    <li><a href="">Terms</a></li>
                    <li><a href="">Privacy Policy</a></li>
                </ul>
            </section>
            <section className="copyright">
                © <span>Chakri</span> 2022. All rights reserved.
            </section>
        </footer>
        <section className="newsletter-container">
            <h2 className="newsletter-text">
                Never Want to Miss<br/> Any <span>Job News?</span>
            </h2>
            <div className="newsletter-input">
                <input type="email" name="" id="" placeholder='Enter your email' />
                <button className="newsletter-btn">Subscribe</button>
            </div>
        </section>
    </div>
  )
}

export default Footer