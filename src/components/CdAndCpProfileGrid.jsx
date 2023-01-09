import React from 'react'
import OverviewDetailTag from './OverviewDetailTag'
import ProfileCard from './ProfileCard'
import { GiHandBag } from 'react-icons/gi'
import { BsCurrencyDollar } from 'react-icons/bs'
import { AiOutlineFieldTime } from 'react-icons/ai'
import { FaLanguage } from 'react-icons/fa'
import { FcGoogle, FcDribbble } from 'react-icons/fc'
import { FiMail } from 'react-icons/fi'
import ReactLoading from 'react-loading';
import { useSelector } from 'react-redux'

const CdAndCpProfileGrid = (props) => {
    const {isLoading}=useSelector
    (state=>state.centralStore)
    if(isLoading){
        return   <ReactLoading color='black' type="spin" height={337} width={115} />
        }
    let weProps = {
        logo: <FcGoogle />,
        title : "Crisis Intervention Specialist",
        loc : "Karachi",
        cpName : "Google Inc.",
        time : "2018 - Present",
        desc : "Minimum 3 shifts a week Monday - Friday with the ability to work an 8 to 9 hour time each week between the hours of 7 A.M. - 7 P.M."
      };
    
      let edProps = {
        logo: <FcDribbble />,
        title : "UI/UX Designer",
        loc : "Lahore",
        cpName : "Dribbble Inc.",
        time : "2017 - 2018",
        desc : "Minimum 3 shifts a week Monday - Friday with the ability to work an 8 to 9 hour time each week between the hours of 7 A.M. - 7 P.M."
      };
      
    return (
        <>
            <div className="profile-body-grid">
                <section className="profile-details">
                    <section className="about-me">
                        <h3>About {props.profile?.name}</h3>
                        <p>{props.profile?.summary}</p>
                    </section>
                    { props.profile?.type === 'company' && <section className="company-profile-skills">
                        <h3>Essential Knowledge, Skills, and Experience</h3>
                        <ul>
                            <li>A portfolio demonstrating well thought through and polished end to end customer journeys</li>
                            <li>5+ years of industry experience in interactive design and / or visual design</li>
                            <li>Excellent interpersonal skills</li>
                            <li>Aware of trends in mobile, communications, and collaboration</li>
                            <li>Ability to create highly polished design prototypes, mockups, and other communication artifacts</li>
                            <li>The ability to scope and estimate efforts accurately and prioritize tasks and goals independently</li>
                            <li>History of impacting shipping products with your work</li>
                            <li>A Bachelor s Degree in Design (or related field) or equivalent professional experience</li>
                            <li>Proficiency in a variety of design tools such as Figma, Photoshop, Illustrator, and Sketch</li>
                        </ul>
                    </section>}
                    
                    { props.profile?.type === 'candidate' && <section className="professional-skills">
                        <h3>Professional Skills</h3>
                        <section className="candidate-profile-skills">
{
                  (props.profile?.skill).map((i,j)=>{
                      return  <span key={j}>{i}</span>}
                ) 
           
        }
        
    
    
    


                        </section>
                    </section>}
                    { props.profile?.type === 'candidate' && <section className="work-experience">
                        <h3>Work Experience</h3>
                        <div className="we-card-container">
                  
                            {(props.profile?.experiences).map((i,j)=>{
                                return <ProfileCard prop={i} key={j}/>    
                            })
                        }
                        </div>
                    </section>}
                    { props.profile?.type === 'candidate' && <section className="education">
                        <h3>Education</h3>
                        <div className="ed-card-container">
                            {(props.profile?.educations).map((i,j)=>{
                                return <ProfileCard prop={i} key={j}/>    
                            })
                        }
                        </div>
                    </section>}
                </section>
                <section className="profile-overview">
                    <h4 className="overview-header">Overview</h4>
                    <section className="overview-details">
                        <OverviewDetailTag logo={<GiHandBag />} title="Company Field" value={props.profile?.field} />
                        <OverviewDetailTag logo={<BsCurrencyDollar />} title="Salary" value="$26-30$k" />
                        <OverviewDetailTag logo={<FaLanguage />} title="Language" value="English" />
                        <OverviewDetailTag logo={<AiOutlineFieldTime />} title="Member Since" value="Jul 2012" />
                    </section>
                    <section className="profile-footer">
                        <ul>
                            <li><span>Location:</span> {props.profile.address}</li>
                            <li><span>Phone:</span>{ props.profile?.phoneNo}</li>
                            <li><span>Email:</span> {props.profile?.email}</li>
                        </ul>
                        <a className="send-message"><FiMail />Send Message</a>
                    </section>
                </section>
            </div>
        </>
    )
}

export default CdAndCpProfileGrid