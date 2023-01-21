import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Done() {
    const navigate=useNavigate()
  return (
    <div style={{width:"100vw",height:"100vh",backgroundColor:"black",display:"flex",justifyContent:"center" ,alignItems:"center"}}>
        <div  style={{width:"30vw",backgroundColor:"white",display:"flex",justifyContent:"center" ,alignItems:"center",
    flexDirection:"column",borderRadius:'5px'}}>
            <img src="https://i.pinimg.com/originals/ff/d2/c2/ffd2c238fb713dbf7872626b493f2a81.jpg" alt=""  width={"100%"}/>
            <h1 style={{textAlign:"center",color:"green"}}>Your skill and summary successfully sent</h1>
            <button style={{backgroundColor:"blue",width:"50%",height:"30px",color:"white",fontSize:"19px",marginBottom:"10px",borderRadius:'5px'}} onClick={()=>navigate("/job")}>ok</button>
        </div>
    </div>
  )
}
