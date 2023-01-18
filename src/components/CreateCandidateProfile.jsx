import React,{useState} from 'react'
import { RxMagnifyingGlass } from 'react-icons/rx'
import { AiOutlineClose, AiOutlineInfoCircle } from 'react-icons/ai'
import { createProfile } from '../actions/user'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const CreateCandidateProfile = () => {
    const dispatch=useDispatch()
    const user=JSON.parse(localStorage.getItem("profile"))?.user
    const initialForm={name:"",email:"",
    phoneNo:"",
    field:"",
    summary:"",
    country:"",
    address:"",
    skill:"",
    instituteName:"",
    description:"",
    startingDate:"",
    endingDate:"",
    instituteNameE:"",
    descriptionE:"",
    gender:"",
    startingDateE:"",
    endingDateE:"",
image:"",userId:user._id}
    const [form, setForm] = useState(initialForm);
    const onHandleChange=(e)=>{
        setForm({ ...form, [e.target.name]: e.target.value })
        console.log(form)

    }
    const onHandleChange1=(e)=>{
        setForm({...form,image:e.target.files[0]})
    }
    const navigate=useNavigate()
    
    const onSubmit=(e)=>{
        const form1=new FormData()
              Object.entries(form).map((i)=>{
        form1.append(i[0],i[1])
          
          })
// if(user._id){
//     dispatch(createProfile(form1))   

// }
    navigate("/")
    }
    
    
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
                    <input type="file" className="cr-cd-upload"placeholder='upload '
                     name="image"
                    onChange={onHandleChange1} />
                </div>
                <div className="cr-cd-basic-details">
                    <div className="basic-input-container">
                        <label htmlFor="fullname">Name</label>
                        <input type="text" name="name" onChange={onHandleChange}  id='fullname' placeholder='Your Name' />
                    </div>
                    <div className="basic-input-container">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" onChange={onHandleChange} id='email' placeholder='Your Email' />
                    </div>
                    <div className="basic-input-container">
                    <label htmlFor="gender">Gender</label>
                       <select name="gender" id="gender" style={{offsetPath:"fill-box",fontWeight:"400",color:"grey"}} onChange={onHandleChange}>
                        <option value="male" style={{offsetPath:"fill-box",fontWeight:"400",color:"grey"}} >Male</option>
                        <option value="female" style={{offsetPath:"fill-box",fontWeight:"400",color:"grey"}} >Female</option>
                    </select>
                    </div>

                    <div className="basic-input-container">
                        <label htmlFor="contact-number">Contact Number</label>
                        <input type="text" name="phoneNo" onChange={onHandleChange}id='contact-number' placeholder='Contact Number' />
                    </div>
                    <div className="basic-input-container">
                        <label htmlFor="field">Area of Expertise</label>
                        <input type="text" name="field" onChange={onHandleChange}id='field' placeholder='Enter your Area of expertise' />
                    </div>
                    <div className="basic-input-container">
                        <label htmlFor="summary">Summary</label>
                        <textarea name="summary" onChange={onHandleChange} id="summary" cols="20" rows="5" placeholder='Summary '></textarea>
                    </div>
                    <div className="city-input">
                        <div className="basic-input-container">
                            <label htmlFor="state">Country</label>
                            <input type="text" name="country" onChange={onHandleChange} id='state' placeholder='Your State' />
                        </div>
                        <div className="basic-input-container">
                            <label htmlFor="city">City</label>
                            <input type="text" id='city' name="address" onChange={onHandleChange} placeholder='Your City' />
                        </div>
                    </div>
                </div>
            </div>
            <section className="cr-cd-skills">
                <h2>Skills</h2>
                <div className="cr-cd-skills-input-container">
                    <input type="text" id='skills' name="skill" onChange={onHandleChange} placeholder='E.g. Angular, Laravel...' />
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
                    <input type="text" name='instituteName' onChange={onHandleChange} placeholder='Enter Company Name' />
                    <input type="text" name='description' onChange={onHandleChange} placeholder='Enter Your Position' />
                    <div className="experience-time-container">
                        <section className="start-date">
                            <label htmlFor="start-date">Start Date</label>
                            <input id='start-date' name="startingDate" onChange={onHandleChange} type="date"/>
                        </section>
                        <section className="end-date">
                            <label htmlFor="end-date">End Date</label>
                            <input id='end-date' name="endingDate" onChange={onHandleChange} type="date"/>
                        </section>
                    </div>
                </div>
            </section>
            <section className="cr-cd-education">
                <h2>Education</h2>
                <div className="cr-cd-education-input-container basic-input-container">
                    <input type="text" name='instituteNameE' onChange={onHandleChange} placeholder='Enter Institution Name' />
                    <input type="text" name='descriptionE' onChange={onHandleChange} placeholder='Description' />
                    <div className="education-time-container">
                        <section className="start-date">
                            <label htmlFor="start-date">Start Date</label>
                            <input id='start-date' name="startingDateE" onChange={onHandleChange} type="date"/>
                        </section>
                        <section className="end-date">
                            <label htmlFor="end-date">End Date</label>
                            <input id='end-date' name="endingDateE" onChange={onHandleChange} type="date"/>
                        </section>
                    </div>
                </div>
            </section>
            <button className="save-profile" onClick={()=>{
                onSubmit()
            }}>Save Profile</button>
        </div>
    )
}

export default CreateCandidateProfile