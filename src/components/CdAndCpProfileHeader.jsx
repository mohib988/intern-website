import React,{useState} from 'react'
import Axios from "axios"
import { FiDownload } from 'react-icons/fi'
import { GoLocation } from 'react-icons/go'
import { BsTelephone } from 'react-icons/bs'
import InputPost from './InputPost'
import { Link,useNavigate} from 'react-router-dom'

import { url } from '../assets/url'
const CdAndCpProfileHeader = (props) => {
    const navigate=useNavigate()
    const [company,setCompany]=useState(false)
    const myfunction=()=>{
        setCompany(false)
    }
    const [fileinfo, setFileinfo] =useState({
        file:[],
        filepreview:null,
       });
      
       const handleInputChange = (event) => {
        setFileinfo({
          file:event.target.files[0],
          filepreview:URL.createObjectURL(event.target.files[0]),
        }
      );
      
      }


    const user=JSON.parse(localStorage.getItem("profile"))?.user
    function check(){

         if(props.profile.type === 'candidate') {
            if ((props.profile.cv)==="") {
if(user?._id==props.profile.userId){

   return <div><input type="file" className="form-control" name="upload_file"  onChange={handleInputChange} />
<button className="download-cv" onClick={()=>{
    const formdata = new FormData(); 
    formdata.append('image', fileinfo.file);
    formdata.append('id',props.profile.userId);

    Axios.post(`${url}/user/uploadCv`, formdata,{   
        headers: { "Content-Type": "multipart/form-data" } 
})
.then(res => { 
  console.warn(res);
})
}} > submit it  </button>
        </div>}
            }
            else{    
return <div>
<a href={`${url}/${props.profile.cv}`} style={{textDecoration:"none",fontSize:"20px" ,border:"2px solid grey" ,backgroundColor:"lightblue",borderRadius:"5px "} }>View Cv</a>

</div>
  
}
            
            }  
             else{
if(user?._id==props.profile?.userId){
    return <button className="contact-us" onClick={()=>{
        setCompany(true)
    }}>
    {/* <BsTelephone className='phone' />  */}
    
    create Post</button>} else{
        return <button className="contact-us" >
        <BsTelephone className='phone' /> 
        contact us</button>
    }
}
    }
    return (
        <>
            <img src={url+"/"+(props.profile?.profilePicture)} className="cp-cover-img"></img>
            <div className="profile-header">
                <div className="profile-header-left">
                    <img src={url+"/"+
                    props.profile?.profilePicture} alt="" className="profile-pic" />
                    <div className="profile-name-pos">
                        <h3 className="profile-name">{props.profile?.name}</h3>
                        {props.profile.type === 'candidate' ? 
                        
                        <span className="profile-pos">{props.profile?.field}</span> 
                        
                        : <span className="profile-tagline">{props.profile?.field}</span>}  
                        <span className="profile-loc"><GoLocation style={{ fill: '#abaaad' }} />{props.profile?.address}</span>
                    </div>
                </div>
                <div className="profile-header-right">
                        { check()}
                    
                </div>
            </div>
            {
company &&
                <InputPost id={props.profile._id} setFunction={myfunction}/>
            }
        </>
    )
}

export default CdAndCpProfileHeader