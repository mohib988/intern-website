import React from 'react'
import JobSearch from './JobSearch'
import Categories from './Categories'
import FeaturedJobs from './FeaturedJobs'
import Testimonials from './Testimonials'
import PostJob from './PostJob'
import Sponsors from './Sponsors'
import Footer from './Footer'
import Navbar from './Navbar'

const HomePageComponents = () => {
  return (
    <div>
        <Navbar />
        <JobSearch />
        <Categories />
        <FeaturedJobs />
        <Testimonials />
        <PostJob />
        <Sponsors />
        <Footer />
    </div>
  )
}

export default HomePageComponents