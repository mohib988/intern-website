import React,{useState} from 'react'
import { GoLocation } from 'react-icons/go'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { MdOutlineDelete } from 'react-icons/md'
import { BsClock, BsCursor } from 'react-icons/bs'
import { useDispatch,useSelector } from 'react-redux'
import { deleteJobPost,applyForJob } from '../actions/jobPost'
import { useNavigate ,useLocation} from 'react-router-dom'
import { url } from '../assets/url'
function useQuery() {
    return new URLSearchParams(useLocation().search);}



const FindJobCard = (props) => {
  const {posts,isLoading}=useSelector(state=>state.centralStore)
 const query=useQuery()
 const page=query.get('page')||1
 const search=query.get('search')
 

  
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const user=JSON.parse(localStorage.getItem("profile"))?.user
    const[hover,sethover]=useState(false)
    const deleteFunction=(e)=>{
    
const conf=confirm("do you really want to delete it?")

if(conf){
dispatch(deleteJobPost(props.post._id))
if(search){
    dispatch(getPostsBySearch(search))
        }
        else{
    
          dispatch(getAllPost(page))
        }
}
}
const onSubmit=()=>{
    if(user){

        const form={userId:user?._id,postId:props.post._id,email:props.post.companyId.email,jobTitle:props.post.jobTitle}
        dispatch(applyForJob(form))
        if(search){
            dispatch(getPostsBySearch(search))
                }
                else{       
                  dispatch(getAllPost(page))
                }
    }else{
        navigate("/login")
        alert("login first")
    }
    // console.log(props.pos)
    }
    return (
        <div className='find-job-card'>
            {/* <img src="https://xsgames.co/randomusers/avatar.php?g=female" alt="" className="cp-logo" />
            <h3 className="cp-name">Google</h3>
            <span className="cp-location">
                <GoLocation style={{ fill: '#abaaad' }} />
                <span>Karachi, PK</span>
            </span>
            <a className="cp-jobs">12 Jobs Open</a> */}
            <section className="fj-header">
                <img src={url+"/"+props.post.companyId.profilePicture} alt="" className="fj-logo" />
                <div className="fj-name-loc">
                    {user?
                    user?._id===props.post.companyId.userId ? <MdOutlineDelete  
                    id="MdOutlineDelete"
                    onClick={deleteFunction}/>:<></>:<></>}
                    <h4 className="fj-name">{props.post.jobTitle}</h4>
                    <span className="fj-loc"><GoLocation style={{fill: '#abaaad'}} /> {props.post.location}</span>
                    <h4 className="fj-name">{props.post.companyId.name}</h4>
                    <span className="fj-loc"><GoLocation style={{fill: '#abaaad'}} /> {props.post.address}</span>
                </div>
            </section>
            <section className="fj-body">
            <h4 className="fj-title">{props.post.Jobtitle}</h4>
                <section className="fj-details">
                    <span className="fj-allowance"><AiOutlineClockCircle style={{fill: '#abaaad'}} />{props.post.paid?"paid":"Unpaid"}</span>
                    <span className="fj-time"><BsClock style={{fill: '#abaaad'}} /> Months</span>
                </section>
            </section>
            <p className="fj-summary">{props.post.jobDescription}</p>
            <section className="fj-skills-req">
                <section className="candidate-card-skills">
                    {/* {props.post.skill.map((i,j)=>{
                        return <span  key={j}className='skill-tag'>{i}</span>
                    })

                    } */}
                  
                </section>
            </section>
                <section className="fj-footer">
                    <div className="fj-pay">
                        $
                        {props.post.paid?props.post.price:0}<sub>/Hour</sub></div>
                        {

                            (props.post.applied).includes(user?._id)?
                            <button className="fj-apply" style={{border:"2px solid white",backgroundColor:"greenyellow"}} 
                            
                            >Applied</button>:<button className="fj-apply" style={{border:"2px solid white"}} 
                            onClick={onSubmit}
                            
                            >Apply Now</button>
                        }
            </section>
        </div>
    )
}

export default FindJobCard