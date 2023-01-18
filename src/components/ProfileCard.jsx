// will add location here
import ReactLoading from 'react-loading';
import React,{useState} from 'react'
import { FcGoogle } from 'react-icons/fc'
import {CiEdit} from "react-icons/ci"
import { MdOutlineDelete } from 'react-icons/md'

import InputEducationAndExperience from './InputEducationAndExperience';
import { useDispatch } from 'react-redux';
import { deleteEducationAndExperience } from '../actions/user';
const ProfileCard = (props) => {
    const [education,seteducation]=useState(false)
    const dispatch=useDispatch()
    const myfunction=()=>{
        seteducation(false)
    }
    const deleteFunction=(e)=>{
    
        const conf=confirm("do you really want to delete it?")
  const    form={userId:user._id,type:props.type}
        if(conf){
        dispatch(deleteEducationAndExperience(form,props.prop._id))
        window.location.reload(true)
        }
            }
    const user=JSON.parse(localStorage.getItem("profile"))?.user
    return (
        <>
            <section className="pf-card">
                <div className="pf-logo">
                <FcGoogle />,
                </div>
                <div className="pf-details">
                    <section className="pf-top">
                        <div className="pf-title-loc-company">
                            <h4>{props.prop.instituteName ||"No Data"}</h4>
                            <span>pakistan &#x2022;</span>
                        </div>
                        <span className="pf-work-time">{ props.prop.startingDate.substring(0,4)+"-"+props.prop.endingDate.substring(0,4)||"No Data"
                        }</span>
                    </section>
                    <div style={{display:"block",width:"400px" }} className="pf-bottom">{props.prop.description ||"No Data"}</div>
                </div>
                  {user._id==props.userId ? 
                  <CiEdit onClick={()=>seteducation(true)} style={{fontSize:"60px",display:"inline",cursor:"pointer"}}/>
                    : <></>}
                      {user._id==props.userId ? 
                  <MdOutlineDelete onClick={()=>deleteFunction()} style={{fontSize:"60px",display:"inline",cursor:"pointer"}}/>
                    : <></>}
            </section>
            {education &&
   <InputEducationAndExperience setFunction={myfunction}  instituteName={props.prop.instituteName} description={props.prop.description} startingDate={props.prop.startingDate} endingDate={props.prop.endingDate}
   id={props.prop._id} type={props.type}/>
            }
        </>
    )
}

export default ProfileCard