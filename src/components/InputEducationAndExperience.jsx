import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { addEducationOrExperience, updateEducationOrExperience } from '../actions/user';
import { useNavigate } from 'react-router-dom'
export default function InputEducationAndExperience(props) {
    const navigate=useNavigate()
    const user=JSON.parse(localStorage.getItem("profile"))?.user
    const dispatch=useDispatch()
    const initialState={
        startingDate:"",
        endingDate:"",
        description:props?.description,
        instituteName:props?.instituteName
        ,
        userId:user._id,
        type:props.type
    }
    const [form,setform]=useState(initialState);
    const onHandleChange=(e)=>{
setform({...form,[e.target.name]:e.target.value})
    }

    const onSubmit=()=>{
        if(props.action==="add"){
            dispatch(addEducationOrExperience(form))
        }
    
        else{
            dispatch(updateEducationOrExperience(form,props.id))
        }
        navigate("/candidates")
    }
  return (
    <div className='inputBox'>
    <div className='inputBox2'>

<label htmlFor="education">
<h1>Institute Name</h1>

<input className='skillandsummaryinput'   type="text"  id="education" placeholder={`Enter institute Name`}   defaultValue={props.instituteName} name="instituteName"
onChange={onHandleChange} 
/>
</label>

<label htmlFor="startdate">
<h1>startdate</h1>
<input className='skillandsummaryinput'   type="date"  id="startdate" placeholder={`Enter institute Name`}  defaultValue={props.startingDate} name="startingDate"
onChange={onHandleChange} 
/>
</label>
<label htmlFor="enddate">
<h1>enddate</h1>
<input className='skillandsummaryinput'   type="date"  id="enddate" placeholder={`Enter institute Name`}  
defaultValue={props.endingDate} name="endingDate"
onChange={onHandleChange} 
/>
</label>
<label htmlFor="descpription">
<h1>description</h1>
<input className='skillandsummaryinput'   type="text"  id="descpription" placeholder={`Enter institute Name`}  defaultValue={props.description} name="description"
onChange={onHandleChange} 
/>
</label>

<div className='buttonHolder'>

<button 
onClick={
    props.setFunction
}
>cancel</button>
<button 
onClick={onSubmit
  }
>Save changes</button>
</div>
</div>

    </div>
    )
}
