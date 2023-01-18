import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { postSkillOrSummary } from '../actions/user.js'

export default function InputSkillAndSummary
(props) {
const user=JSON.parse(localStorage.getItem("profile"))?.user
  const dispatch=useDispatch()
  const [data,setdata]=useState("")
const onSubmit= (e)=>{
 e.preventDefault()
  const data1={"type":"skill","skill":data,"userId":user._id}
  const data2={"type":"summary","summary":data,"userId":user?._id}
  if(props.type=="skill"){
     dispatch(postSkillOrSummary(data1))
  }
  else{
    dispatch(postSkillOrSummary(data2))
  }
  props.setFunction
}
const onHandleChange=(e)=>{
setdata(e.target.value)
}
  return (
    <div className='inputBox'>
    <div className='inputBox2'>

<label htmlFor={props.type}>
<h1>{props.type}</h1>
{props.type==="summary" ?
<input className='skillandsummaryinput' type="text" name={props.type} id={props.type} placeholder={`Enter ${props.type}`} defaultValue={props?.data} onChange={onHandleChange}/>
:
<input className='skillandsummaryinput' type="text" name={props.type} id={props.type} placeholder={`Enter ${props.type}`} defaultValue={props?.data.map((i)=>{return i+' '})} onChange={onHandleChange}/>
}
</label>
<div className='buttonHolder'>

<button onClick={
    props.setFunction
}>cancel</button>
<button onClick={onSubmit
 }
>Save changes</button>
</div>
</div>

    </div>
  )
}
