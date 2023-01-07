import React from 'react'
import CdAndCpProfileHeader from './CdAndCpProfileHeader'
import CdAndCpProfileGrid from './CdAndCpProfileGrid'

const CandidateProfile = () => {
  let headerProps = {
    type:'candidate', 
    crPhoto: 'https://jobbox-nextjs.vercel.app/assets/imgs/page/candidates/img.png',
    pfPhoto: 'https://xsgames.co/randomusers/avatar.php?g=male&n=8',
    name: 'Alan Walker',
    pos: 'UI/UX Designer. Frontend Developer',
    loc: 'Karachi, PK'
  }
  let gridProps = {
    type: 'candidate',
    name: 'Alan Walker',
    desc: 'Hello there! My name is Alan Walker. I am a graphic designer, and I’m very passionate and dedicated to my work. With 20 years experience as a professional a graphic designer, I have acquired the skills and knowledge necessary to make your project a success. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illum fuga eveniet. Deleniti asperiores, commodi quae ipsum quas est itaque, ipsa, dolore beatae voluptates nemo blanditiis iste eius officia minus. Id nisi, consequuntur sunt impedit quidem, vitae mollitia!'
  };

  return (
    <div className='candidate-profile-container'>
      <CdAndCpProfileHeader {...headerProps} />
      <CdAndCpProfileGrid {...gridProps} />
    </div>
  )
}

export default CandidateProfile