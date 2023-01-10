import React from 'react'
import { RxMagnifyingGlass } from 'react-icons/rx'
import { AiOutlineClose, AiOutlineInfoCircle } from 'react-icons/ai'

const CreateCandidateProfile = () => {
    return (
        <div className="cr-cd-container">
            <div className="cr-cd-header">
                <h2>My Account</h2>
                <span>Update your profile</span>
            </div>
            <div className='cr-cd-profile'>
                <h2>Basic Details</h2>
                <div className="cr-cd-avatar">
                    <img src="https://xsgames.co/randomusers/avatar.php?g=female" alt="" className="cr-cd-img" />
                    <button className="cr-cd-upload">Upload Avatar</button>
                </div>
                <div className="cr-cd-basic-details">
                    <div className="basic-input-container">
                        <label htmlFor="fullname">Name</label>
                        <input type="text" id='fullname' placeholder='Your Name' />
                    </div>
                    <div className="basic-input-container">
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' placeholder='Your Email' />
                    </div>
                    <div className="basic-input-container">
                        <label htmlFor="contact-number">Contact Number</label>
                        <input type="text" id='contact-number' placeholder='Contact Number' />
                    </div>
                    <div className="basic-input-container">
                        <label htmlFor="bio">Bio</label>
                        <textarea name="bio" id="bio" cols="20" rows="5" placeholder='Enter Your Bio'></textarea>
                    </div>
                    <div className="basic-input-container">
                        <label htmlFor="website">Personal Website</label>
                        <input type="url" id='website' placeholder='Your Website URL' />
                    </div>
                    <div className="city-input">
                        <div className="basic-input-container">
                            <label htmlFor="state">State</label>
                            <input type="text" id='state' placeholder='Your State' />
                        </div>
                        <div className="basic-input-container">
                            <label htmlFor="city">City</label>
                            <input type="text" id='city' placeholder='Your City' />
                        </div>
                    </div>
                </div>
            </div>
            <section className="cr-cd-skills">
                <h2>Skills</h2>
                <div className="cr-cd-skills-input-container">
                    <input type="text" id='skills' placeholder='E.g. Angular, Laravel...' />
                    <RxMagnifyingGlass />
                </div>
                <div className="cr-cd-cards-container">
                    <span className="cr-cd-skill-card">AdobeXD<AiOutlineClose /></span>
                    <span className="cr-cd-skill-card">Figma<AiOutlineClose /></span>
                    <span className="cr-cd-skill-card">NextJS<AiOutlineClose /></span>
                    <span className="cr-cd-skill-card">React<AiOutlineClose /></span>
                    <span className="cr-cd-skill-card">App<AiOutlineClose /></span>
                    <span className="cr-cd-skill-card">Digital<AiOutlineClose /></span>
                    <span className="cr-cd-skill-card">NodeJS<AiOutlineClose /></span>
                </div>
                <span className="cr-cd-info"><AiOutlineInfoCircle style={{fill: '#abaaad'}} /> You can add upto 15 skills</span>
            </section>
            <section className="cr-cd-experience">
                <h2>Experience</h2>
                <div className="cr-cd-experience-input-container basic-input-container">
                    <input type="text" name='company-name' placeholder='Enter Company Name' />
                    <input type="text" name='position' placeholder='Enter Your Position' />
                    <div className="experience-time-container">
                        <section className="start-date">
                            <label htmlFor="start-date">Start Date</label>
                            <input id='start-date' type="date"/>
                        </section>
                        <section className="end-date">
                            <label htmlFor="end-date">End Date</label>
                            <input id='end-date' type="date"/>
                        </section>
                    </div>
                </div>
            </section>
            <section className="cr-cd-education">
                <h2>Education</h2>
                <div className="cr-cd-education-input-container basic-input-container">
                    <input type="text" name='institute-name' placeholder='Enter Institution Name' />
                    <input type="text" name='field-of-study' placeholder='Enter Your Field Of Study' />
                    <div className="education-time-container">
                        <section className="start-date">
                            <label htmlFor="start-date">Start Date</label>
                            <input id='start-date' type="date"/>
                        </section>
                        <section className="end-date">
                            <label htmlFor="end-date">End Date</label>
                            <input id='end-date' type="date"/>
                        </section>
                    </div>
                </div>
            </section>
            <button className="save-profile">Save Profile</button>
        </div>
    )
}

export default CreateCandidateProfile