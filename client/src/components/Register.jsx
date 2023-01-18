import React,{useState} from 'react'
import { FaUserPlus } from 'react-icons/fa'
import { BiShow } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { signup } from '../actions/user'
import { useNavigate } from 'react-router-dom'


const Register = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const initial={name:"",email:"",password:"",type:"user"}
    const [form,setform]=useState(initial)
    const [candidate,setCandidate]=useState("user")
    const [wrong,setWrong]=useState(false)
    
    const [showPassword, setShowPassword] = useState(false);
     const handleShowPassword = () => setShowPassword(!showPassword);

    const [confirmPassword,setConfirmPassword]=useState("")
 const onHandleChange=(e)=>{
    setform({...form,[e.target.name]:e.target.value})
 }
 const onSubmit=()=>{
    console.log(form)
   if( Object.values(form).some(val => val === "" || val === null || val === undefined) || confirmPassword=="" ){
    setWrong(true)
    console.log(form)
   }else{
    const a=dispatch(signup(form))
if(a){

    if(form.type=="user"){
        
        navigate("/createprofile")
    }
    else{
        
        navigate("/createcompanyprofile")
    }
}
}

 }

  return (
    <div className="register-wrapper">
        <div className="register-container">
            <section className="register-details">
                <a className="navbar-logo register-logo" href='/'>
                    C<span className='h'>h</span><span className='underline'>akr</span><span className='i'>i</span>
                </a>
                <h2 className='register-header'>
                    Sign up for Chakri
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
                
                    <input type="text" className="register-input" placeholder="Username"
                    name="name"  onChange={onHandleChange}          m/>
          <input type="email" className="register-input"  name="email" onChange={onHandleChange} placeholder="Email" />

          <div>

                    <input  className="register-input" 
                    name="password" onChange={onHandleChange}placeholder="Password" 
                    type={showPassword ? 'text' : 'password'} 
                    /> 
                    <BiShow style={{fontSize:"15px",cursor:"pointer"}} onClick ={handleShowPassword}></BiShow>
                    </div>
                    <input type="password" className="register-input" placeholder="Confirm Password"  onChange={(e)=>setConfirmPassword(e.target.value)}/>
                    <select name="type" onChange={onHandleChange} id="register_type" >
                        <option value="user">Candidate</option>
                        <option value="company">Recruiter</option>
                    </select>
                    {
wrong &&
                        <h6 style={{color:'red'}}>please fill the form</h6>
                    }
                    <button className="register-btn "onClick={onSubmit}><FaUserPlus style={{fill: "white"}} className='user-logo' />Sign Up</button>
              
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