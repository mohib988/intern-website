import { formToJSON } from 'axios';
import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { createJobPost } from '../actions/jobPost.js';

export default function InputPost(props) {
    const user=JSON.parse(localStorage.getItem("profile"))?.user
    const dispatch=useDispatch()
    const initialState={
        jobTitle:"",
        jobDescription:'',
        remote:true,
        location:"",
        paid:false,
        price:0,
        companyId:props.id

    }
    const [form,setform]=useState(initialState);
    const onHandleChange=(e)=>{
setform({...form,[e.target.name]:e.target.value})
console.log(form)
    }

    const onSubmit=()=>{
    dispatch(createJobPost(form))
        console.log(form)
    }
  return (
    <div className='inputBox'>
    <div className='inputBox2'>

<label htmlFor="education">
<h1>Post Title</h1>

<input className='skillandsummaryinput'   type="text"  id="education" placeholder={`Enter institute Name`}   defaultValue={props.instituteName} name="jobTitle"
onChange={onHandleChange} 
/>
</label>

<label htmlFor="startdate">
<h1>Description</h1>
<input className='skillandsummaryinput'   type="text"  id="startdate" placeholder={`Enter Title`}  defaultValue={props.startingDate} name="jobDescription"
onChange={onHandleChange} 
/>
</label>
<label htmlFor="remote">Remote
<select name="remote" id="remote" onChange={onHandleChange}>
  <option value={true}>Yes</option>
<option value={false}>No</option>
</select>
</label>
<label htmlFor="paid">paid
<select name="paid" id="paid" onChange={onHandleChange}>
<option value={false}>No</option>
  <option value={true}>Yes</option>
</select>
</label>

<label htmlFor="enddate">
<h1>Address</h1>
<input className='skillandsummaryinput'   type="text"  id="enddate" placeholder={`Enter description`}  
defaultValue={props.endingDate} name="location"
onChange={onHandleChange} 
/>
</label>



<label htmlFor="price">
<h1>price</h1>
<input className='skillandsummaryinput'   type="number"  id="price" placeholder={`Enter price`}  defaultValue={props.startingDate} name="price"
onChange={onHandleChange} 
/>
</label>
s

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

