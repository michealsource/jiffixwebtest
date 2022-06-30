import React, { useEffect, useState } from 'react'
import Slider from '../../components/slider/Slider'
import Steps from '../../components/steps/Steps'
import Testimonial from '../../components/testimonial/Testimonial'
import Services from '../../components/services/Services'
import Choose from '../../components/choose/Choose'
import Goal from '../../components/goal/Goal'
import Phone from '../../components/phone/Phone'
import BookingModal from '../../components/bookingModal/BookingModal'
import MobileSlider from '../../components/slider/MobileSlider'
import MobileSteps from '../../components/steps/MobileSteps'
import TestimonialMobile from '../../components/testimonial/TestimonialMobile'
import ServicesMobile from '../../components/services/ServicesMobile'
import ChooseMobileCarousel from '../../components/choose/ChooseMobileCarousel'
import './Home.css'
const Home = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  useEffect(() => {
    setTimeout(() => setShow(true), 7000)
  }, [])
  return (
    <div>
      <div className='desktop-carousel'>
        <Slider />
      </div>

      <div className='mobile-carousel'>
        <MobileSlider />
      </div>

      <div className="mobile-carousel">
        <MobileSteps />
      </div>

      <div className='desktop-carousel'>
        <Steps />
      </div>

      <div className='desktop-carousel'>
        <Testimonial />
      </div>

      <div className="mobile-carousel">
        <TestimonialMobile />
      </div>


      <div className='desktop-carousel'>
        <Services />
      </div>

      <div className="mobile-carousel">
        <ServicesMobile />
      </div>



      <div className='desktop-carousel'>
        <Choose />
      </div>

      <div className="mobile-carousel">
        <ChooseMobileCarousel />
      </div>

      <Goal/>

      <Phone/>

      <BookingModal handleShow={handleShow} show={show} handleClose={handleClose}/>
    </div>
  )
}

export default Home
