import React from 'react'
import { Carousel } from 'react-bootstrap'
import homeimaage from '../../assets/images/homeimaage.png'
import tanker from '../../assets/images/tanker.png'
import car from '../../assets/images/car.png'
import bolt1 from '../../assets/images/bolt1.png'
import payu from '../../assets/images/payu.png'
import force from '../../assets/images/force.png'
import LoftyLnc from '../../assets/images/LoftyLnc.png'
import pwc from '../../assets/images/pwc.png'
import Skyewise from '../../assets/images/Skyewise.png'
import './Slider.css'
const MobileSlider = () => {
    return (
<Carousel className='carousel-mobile-container'>
  <Carousel.Item>
  <div className="top-carosel-mobile-container">
        <h4 className='mobile-carousel-title'>Just Jiffix it.</h4>
        <p className='mobile-carousel-content'>Join Jiffix car owner’s and fleet operators and begin your journey to quality, convenient, and affordable vehicle  maintenance today.</p>
        <button className='mobile-carousel-btn'>CHECK OUT OUR PRICE!</button>

        <div className="mobile-count-container">
        <img src={car} alt="car-img" height={35} width={35.87}/>
          <span className='mobile-count-number'>2,690</span>
        </div>
        <span className='mobile-job-completed'>Quality Jobs Completed</span>

        <div className="companies-logos-mobile">
          <img width={50} height={18} src={bolt1} alt="bolt-image" />
          <img width={18} height={18} src={payu} alt="bolt-image"  />
          <img width={76} height={13} src={force} alt="bolt-image" />
          <img width={25} height={20} src={LoftyLnc} alt="bolt-image" />
          <img width={50} height={18} src={pwc} alt="bolt-image" />
          <img width={50} height={25} src={Skyewise} alt="bolt-image" />
    </div>
      </div>

    <img
      className="d-block w-100"
      src={homeimaage}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
  <div className="top-carosel-mobile-container">
        <h4 className='mobile-carousel-title'>Just Jiffix it.</h4>
        <p className='mobile-carousel-content'>Join Jiffix tractor owner’s and fleet operators and begin your journey to higher yields through quality, convenient, and affordable  maintenance program.</p>
        <button className='mobile-carousel-btn'>CHECK OUT OUR PRICE!</button>

        <div className="mobile-count-container">
        <img src={car} alt="car-img" />
          <span className='mobile-count-number'>2,690</span>
        </div>
        <span className='mobile-job-completed'>Quality Jobs Completed</span>

        <div className="companies-logos-mobile">
          <img width={50} height={18} src={bolt1} alt="bolt-image" />
          <img width={18} height={18} src={payu} alt="bolt-image"  />
          <img width={76} height={13} src={force} alt="bolt-image" />
          <img width={25} height={20} src={LoftyLnc} alt="bolt-image" />
          <img width={50} height={18} src={pwc} alt="bolt-image" />
          <img width={50} height={25} src={Skyewise} alt="bolt-image" />
    </div>
      </div>
    <img
      className="d-block w-100"
      src={tanker}
      alt="Second slide"
    />
  </Carousel.Item>
</Carousel>
    )
}

export default MobileSlider
