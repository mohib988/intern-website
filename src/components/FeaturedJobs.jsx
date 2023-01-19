import React from 'react';
import FeaturedJobsCard from './FeaturedJobsCard';
import { FaMicrosoft } from 'react-icons/fa';

const FeaturedJobs = () => {
  return (
    <div className="featured-jobs">
        <h2 className="featured-jobs-header">
            <span>Featured</span> Job Circulars
        </h2>
        <div className="featured-jobs-cards-container">
          <FeaturedJobsCard logo="https://img.icons8.com/color/48/null/microsoft.png" name="Microsoft" location="Karachi" position="Visual Designer" schedule="Full-time" salary={2500} />
          <FeaturedJobsCard logo="https://img.icons8.com/color/48/null/behance.png" name="Behance" location="Karachi" position="Visual Designer" schedule="Full-time" salary={2500} />
          <FeaturedJobsCard logo="https://img.icons8.com/ios/50/null/gmail--v1.png" name="Gmail" location="Karachi" position="Visual Designer" schedule="Full-time" salary={2500} />
          <FeaturedJobsCard logo="https://img.icons8.com/color/48/null/etsy.png" name="Etsy" location="Karachi" position="Visual Designer" schedule="Full-time" salary={2500} />
          <FeaturedJobsCard logo="https://img.icons8.com/ios-glyphs/30/null/mac-os.png" name="Apple" location="Karachi" position="Visual Designer" schedule="Full-time" salary={2500} />
          <FeaturedJobsCard logo="https://img.icons8.com/color/48/null/discord-logo.png" name="Discord" location="Karachi" position="Visual Designer" schedule="Full-time" salary={2500} />
          <FeaturedJobsCard logo="https://img.icons8.com/color/48/null/nike.png" name="Nike" location="Karachi" position="Visual Designer" schedule="Full-time" salary={2500} />
          <FeaturedJobsCard logo="https://img.icons8.com/ios-filled/50/null/adidas-trefoil.png" name="Adidas" location="Karachi" position="Visual Designer" schedule="Full-time" salary={2500} />
        </div>
        <a href="" className="view-all-jobs">View All</a>
    </div>
  )
}

export default FeaturedJobs