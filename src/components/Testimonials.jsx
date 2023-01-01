import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import useFetch from '../hooks/useFetch.js';

const Testimonials = () => {
  const { data } = useFetch('src/assets/data/testimonial-data.json');
  return (
    <div className="testimonials-wrapper">
        <h2><span>Reviews</span> of People Who Have<br /> Found Jobs Through Chakri</h2> 
        <Carousel showThumbs={false} centerMode={true} centerSlidePercentage={100} showArrows={false} showStatus={false} autoPlay={true} infiniteLoop={true}>
          {data && data.map((t) => (
            <div className="testimonial-card" key={t.id}>
              <p className="testimonial-quote">"{t.quote}"</p>
              <img src={t.img} alt="" className="testimonial-avatar-img" />
              <span className="testimonial-avatar-name">{t.name}</span>
              <span className="testimonial-avatar-company">{t.company}</span>
            </div>
          ))}           
        </Carousel>
    </div>
  )
}

export default Testimonials