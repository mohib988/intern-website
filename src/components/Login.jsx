import React,{useState} from 'react'
import { AiOutlineLogin } from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import { signin } from '../actions/user';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const dispatch=useDispatch()
    const initialState = {  email: '', password: '', };
    const navigate=useNavigate()
    const [form, setForm] = useState(initialState);
    const [visibility, setVisibility] = useState("hidden");
    const [visibility2, setVisibility2] = useState("hidden");

    const handleChange = (e) =>{

        setForm({ ...form, [e.target.name]: e.target.value })
        if(form.email.includes("@")){
            setVisibility2("hidden")
        }else{
            setVisibility2("visible")
            
        }
        console.log(form);
    }

const onsubmit=async (form)=>{

const user= await dispatch(signin(form))
if(user){
navigate("/")
}else{
setVisibility("visible")
}
// console.log(user)
}

  return (
    <div className="register-wrapper">
        <div className="register-container">
            <section className="register-details">
                <a className="navbar-logo register-logo" href='/'>
                    <span className='h'>C</span><span className='underline'>areer</span><span className='i'>Se</span>
                </a>
                <h2 className='register-header'>
                    Sign in for CareerSe
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
                {/* <form className="register-form"> */}
                    <input type="email" className="register-input"   onChange=
                    {handleChange}
                    name="email" placeholder="email" />
                     <span style={{visibility:visibility2,fontWeight:"bold",color:"blue"}}>please Include @</span>
                    <input type="password" className="register-input"
                    name='password'  onChange={handleChange}placeholder="password" />
                    <span style={{visibility:visibility,fontWeight:"bold",color:"red"}}>wrong credentials</span>
                    <button  onClick={(e)=>{
e.preventDefault()
onsubmit(form)
                    }} className="register-btn"><AiOutlineLogin style={{fill: "white"}} className='user-logo' />Sign In</button>
                {/* </form> */}
                <span className="register-footer">Not Registered Yet? <a href="/register">Sign up</a></span>
            </section>
            <section className="register-illustration">
                <img src="https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg" alt="" className="register-illustration-img" />
            </section>
        </div>
    </div>
  )
}

export default Login