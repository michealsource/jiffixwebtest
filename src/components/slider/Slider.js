import React from 'react'
import {Carousel} from 'react-bootstrap'
import homeimaage from '../../assets/images/owner.png'
import tanker from '../../assets/images/tanker.png'
import car from '../../assets/images/car.png'
import bolt1 from '../../assets/images/bolt1.png'
import payu from '../../assets/images/payu.png'
import force from '../../assets/images/force.png'
import LoftyLnc from '../../assets/images/LoftyLnc.png'
import pwc from '../../assets/images/pwc.png'
import Skyewise from '../../assets/images/Skyewise.png'
import './Slider.css'
const Slider = () => {
  return (
    <Carousel className='desktop-slide-carousel'>
    <Carousel.Item style={{position:'relative'}}>
    
      <img
        className="d-block w-100 slide-img"
        src={homeimaage}
        alt="First slide"
      />
      <div className="carousel-content">
        <h3>Just Jiffix It.</h3>
        <p>Join Jiffix car owner’s and fleet operators and begin your journey to quality, convenience, and affordable vehicle  maintenance today.</p>

        <button className='check-vehicle-health-btn'>CHECK OUT OUR PRICING!</button>

        <div className="count-container">
          <img src={car} alt="car-img" />
          <span>2,690 Quality Jobs Completed</span>
        </div>

        <div className="companies-container">
          <h3>Great companies that trust us</h3>
          <div className="companies-logos">
          <img width={129} height={45} src={bolt1} alt="bolt-image"  style={{marginTop:"20px"}}/>
          <img width={38} height={38} src={payu} alt="bolt-image"  style={{marginTop:"20px"}}/>
          <img width={177} height={25} src={force} alt="bolt-image"  style={{marginTop:"20px"}}/>
          <img width={42} height={38} src={LoftyLnc} alt="bolt-image"  style={{marginTop:"20px"}}/>
          <img width={100} height={38} src={pwc} alt="bolt-image"  style={{marginTop:"20px"}}/>
          <img width={64} height={38} src={Skyewise} alt="bolt-image"  style={{marginTop:"20px"}}/>
          </div>
        </div>
      </div>
    </Carousel.Item>
    <Carousel.Item style={{position:'relative'}}>
      <img
        className="d-block w-100 slide-img"
        src={tanker}
        alt="First slide"
      />
      <div className="carousel-content">
        <h3>Just Jiffix It.</h3>
        <p>Join Jiffix tractor owner’s and fleet operators and begin your journey to higher yields through quality, convenient, and affordable  maintenance program.</p>

        <button className='check-vehicle-health-btn'>COMING SOON...</button>

        {/* <div className="count-container">
          <img src={car} alt="car-img" />
          <span> <span className='job-count'>2,690</span>  Quality Jobs Completed</span>
        </div> */}

        <div className="companies-container">
          <h3>Great companies that trust us</h3>
          <div className="companies-logos">
          <img width={129} height={45} src={bolt1} alt="bolt-image"  style={{marginTop:"20px"}}/>
          <img width={38} height={38} src={payu} alt="bolt-image"  style={{marginTop:"20px"}}/>
          <img width={117} height={25} src={force} alt="bolt-image"  style={{marginTop:"20px"}}/>
          <img width={42} height={38} src={LoftyLnc} alt="bolt-image"  style={{marginTop:"20px"}}/>
          <img width={100} height={38} src={pwc} alt="bolt-image"  style={{marginTop:"20px"}}/>
          <img width={64} height={38} src={Skyewise} alt="bolt-image"  style={{marginTop:"20px"}}/>
          </div>
        </div>
      </div>
    </Carousel.Item>
  </Carousel>
  )
}

export default Slider
