import React from 'react'
import smile from '../../assets/images/why.png'
import Slider from "react-slick";

const TestimonialMobile = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 11000,
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
                <h4>Why our customers <span>love Jiffix</span></h4>
                <h4 className='qote'>“</h4>
                <p></p>
                <p>Jiffix actually exceeded my expectation. Super impressed with the service. They kept to time, gave me the right diagnosis and recommendation and it worked. The fee also very decent. I felt I got more than I paid for. Very professional and efficient. I think I found the perfect company for my cars. Thanks Jiffix</p>
                <span>Timi Olatunji</span>
            </div>

            <div className='mobile-testimonial-carousel-card'>
                <h4>Why our customers <span>love Jiffix</span></h4>
                <h4 className='qote'>“</h4>
                <p>Jiffix's expertise is second to none. They were able to arrive at mine in record time and expertly fixed my automobile. I recommend their service.</p>
                <span>Michael Ojo</span>
            </div>
        </Slider>
        <button className='schedule-btn-mobile'>SCHEDULE A SERVICE</button>
        </div>
    </div>
  )
}

export default TestimonialMobile