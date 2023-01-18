import React,{useState} from 'react'
import JobSearch from './JobSearch'
import Categories from './Categories'
import FeaturedJobs from './FeaturedJobs'
import Testimonials from './Testimonials'
import PostJob from './PostJob'
import Sponsors from './Sponsors'


const HomePageComponents = () => {
 
  return (
    <div>
     
        <JobSearch />
        <Categories />
        <FeaturedJobs />
        <Testimonials />
        <PostJob />
        <Sponsors />


    </div>
  )
}

export default HomePageComponents