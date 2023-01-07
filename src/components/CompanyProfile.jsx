import React from 'react'
import CdAndCpProfileGrid from './CdAndCpProfileGrid';
import CdAndCpProfileHeader from './CdAndCpProfileHeader'

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
  
  return (
    <div className='company-profile-container'>
        <CdAndCpProfileHeader {...headerProps} />
        <CdAndCpProfileGrid {...gridProps} />
    </div>
  )
}

export default CompanyProfile