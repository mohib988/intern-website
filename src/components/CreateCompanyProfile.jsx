import React,{useState} from 'react'
import { RxMagnifyingGlass } from 'react-icons/rx'
import { AiOutlineClose, AiOutlineInfoCircle } from 'react-icons/ai'
import { createProfile } from '../actions/user'
import { useDispatch, useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createCompany } from '../actions/company'
import { useNavigate } from 'react-router-dom'
import { BiMessageAltError } from 'react-icons/bi'
import ReactLoading from 'react-loading';

const CreateCompanyProfile = () => {
    const {isLoading}=useSelector(state=>state.centralStore)
    if(isLoading){
        return   <ReactLoading color='black' type="spin" height={337} width={115} />
      }
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const user=JSON.parse(localStorage.getItem("profile"))?.user
    const initialForm={name:"",email:"",
    phoneNo:"",
    field:"",
    summary:"",
    country:"",
    address:"",
    numberOfEmployee:0,
    userId:user._id,
image:""}
    const [form, setForm] = useState(initialForm);
    const onHandleChange=(e)=>{
        setForm({ ...form, [e.target.name]: e.target.value })
        console.log(form)

    }
    const onHandleChange1=(e)=>{
        setForm({...form,image:e.target.files[0]})
    }
    
    const onSubmit=(e)=>{
        const form1=new FormData()
              Object.entries(form).map((i)=>{
        form1.append(i[0],i[1])
          
    })
    if( Object.values(form).some(val => val === "" || val === null || val === undefined)  ){
        alert("please fill the form correctly ")
        console.log(form)
       }else{
           if(user._id){         
               dispatch(createCompany(form1))   
               navigate("/")
            }
        }

    }
    
    
    return (
        <div className="cr-cd-container">
            <div className="cr-cd-header">
                <h2>My Account</h2>
                <span>Update your company</span>
            </div>
            <div className='cr-cd-profile'>
                <h2>Company Detail</h2>
                <div className="cr-cd-avatar">
                    <img src="https://xsgames.co/randomusers/avatar.php?g=female" alt="" className="cr-cd-img" />
                    <input type="file" className="cr-cd-upload"placeholder='upload '
                     name="image"
                    onChange={onHandleChange1} />
                </div>
                <div className="cr-cd-basic-details">
                    <div className="basic-input-container">
                        <label htmlFor="fullname">Name</label>
                        <input type="text" name="name" onChange={onHandleChange}  id='fullname' placeholder='Company Name' />
                    </div>
                    <div className="basic-input-container">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" onChange={onHandleChange} id='email' placeholder='Company Email' />
                    </div>

                    <div className="basic-input-container">
                        <label htmlFor="contact-number">Contact Number</label>
                        <input type="text" name="phoneNo" onChange={onHandleChange}id='contact-number' placeholder='Contact Number' />
                    </div>
                    <div className="basic-input-container">
                        <label htmlFor="field">Industry</label>
                        <input type="text" name="field" onChange={onHandleChange}id='field' placeholder='Enter your Industry' />
                    </div>
                    <div className="basic-input-container">
                        <label htmlFor="summary">Company Description</label>
                        <textarea name="summary" onChange={onHandleChange} id="summary" cols="20" rows="5" placeholder='Description'></textarea>
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
                <h4 style={{color:"grey"}}>Employees</h4>
                <div className="basic-input-container">
                    <input type="number" id='employee' name="numberOfEmployee" onChange={onHandleChange} placeholder='Company employees' />
                    
                </div>
        
            </section>
            <button className="save-profile" onClick={()=>{
                onSubmit()
            }}>Save Profile</button>
        </div>
    )
}

export default CreateCompanyProfile;