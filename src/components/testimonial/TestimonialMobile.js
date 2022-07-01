import React from 'react'
import smile from '../../assets/images/smile.png'
import Slider from "react-slick";

const TestimonialMobile = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className='testimonial-mobile-container'>
        <div className="top-testmonial-img">
            <img src={smile} alt="" width={375} height={191}/>
        </div>

        <div className="carousel-testimonial-mobile">
        <Slider {...settings}>
            <div className='mobile-testimonial-carousel-card'>
                <h4>Why our customers <span>love Jiffix“</span></h4>
                <p></p>
                <p>Join Jiffix car owner’s and fleet managers and begin your journey to quality, convenience, and affordable vehicle maintenance today.</p>
                <span>Prince Ezike</span>
            </div>
            <div className='mobile-testimonial-carousel-card'>
                <h4>Why our customers <span>love Jiffix“</span></h4>
                <p>Join Jiffix car owner’s and fleet managers and begin your journey to quality, convenience, and affordable vehicle maintenance today.</p>
                <span>Prince Ezike</span>
            </div>
            <div className='mobile-testimonial-carousel-card'>
                <h4>Why our customers <span>love Jiffix“</span></h4>
                <p>Join Jiffix car owner’s and fleet managers and begin your journey to quality, convenience, and affordable vehicle maintenance today.</p>
                <span>Prince Ezike</span>
            </div>
        </Slider>
        <button className='schedule-btn-mobile'>SCHEDULE A SERVICE</button>
        </div>
    </div>
  )
}

export default TestimonialMobile