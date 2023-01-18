import React,{useEffect} from 'react'
import CdAndCpProfileGrid from './CdAndCpProfileGrid';
import CdAndCpProfileHeader from './CdAndCpProfileHeader'
import { useParams } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { getOneCandidate } from '../actions/user';
import ReactLoading from "react-loading"
import { getOneCompany } from '../actions/company';

const CompanyProfile = () => {
  let headerProps = {
    type:'company',
    crPhoto: 'https://jobbox-nextjs.vercel.app/assets/imgs/page/company/img.png',
    pfPhoto: 'https://img.icons8.com/fluency/144/null/dribbble.png',
    name: 'Dribbble Inc.',
    tagline: 'Our Mission to make working life simple',
    loc: 'Karachi, PK'
  };
  let gridProps = {
    type:'company',
    name: 'Dribbble Inc.',
    desc: 'The AliStudio Design team has a vision to establish a trusted platform that enables productive and healthy enterprises in a world of digital and remote everything, constantly changing work patterns and norms, and the need for organizational resiliency. The ideal candidate will have strong creative skills and a portfolio of work which demonstrates their passion for illustrative design and typography. This candidate will have experiences in working with numerous different design platforms such as digital and print forms.',
  };
  const dispatch=useDispatch()
  const {currentCompany,isLoading}=useSelector(state=>state.centralStore)
  const {id}=useParams()
  useEffect(()=>{
dispatch(getOneCompany(id))
  },[id])

//  if(isLoading){
//   return      <ReactLoading color='black' type="spin" height={337} width={115} />

//  }

  return (
    <div className='company-profile-container'>
         <CdAndCpProfileHeader profile={{...currentCompany,type:"company"}} />
        <CdAndCpProfileGrid profile={{...currentCompany,type:"company"}} /> 
    </div>
  )
}

export default CompanyProfile