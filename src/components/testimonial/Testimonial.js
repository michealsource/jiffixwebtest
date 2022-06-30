import React from 'react'
import smile from '../../assets/images/smile.png' 
import Wrapper from '../wrapper/Wrapper'
import "./Testimonial.css"
import TestmonialCarousel from './TestmonialCarousel'
const Testimonial = () => {
  return (
    <div style={{overflow:"hidden", position:"relative"}}>
      <img src={smile} alt="" width={1512} height={796}/>
      <div className='testimonial-wrapper'>
       <Wrapper>
            <div className="testimonial-content">
            <h5 className='testmonial-title'>Why our customers <span>love Jiffix “</span></h5>
            <TestmonialCarousel/>
            <button className="schedule-service-btn">SCHEDULE A SERVICE</button>
            </div>
        </Wrapper> 
        </div>
    </div>
  )
}

export default Testimonial
