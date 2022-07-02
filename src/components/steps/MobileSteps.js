import React from 'react'
import './Steps.css'
import firstSlide from '../../assets/images/first-slide.png'
import secondSlide from '../../assets/images/second-slide.png'
import thirdSlide from '../../assets/images/third-slide.png'
import bmw from '../../assets/images/bmw.png' 
import toyota from '../../assets/images/toyota.png' 
import lexus from '../../assets/images/lexus.png' 
import download from '../../assets/images/download.png' 
import honda from '../../assets/images/honda.png' 
import landrover from '../../assets/images/landrover.png' 
import benxblack from '../../assets/images/benxblack.png' 
import ford from '../../assets/images/ford.png' 
import Slider from "react-slick";
const MobileSteps = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div className='mobile-steps-container'>
            <div className="step-mobile-top">
                <h4>Three steps  <span>to fix with jiffix</span></h4>
                <p>Find out how you can get access to quality vehicle inspections, affordable repairs, efficient maintenance and convenient modes of service anywhere in Nigeria</p>
                <button>START NOW</button>
            </div>

            <div className="step-mobile-carousel-bottom">
                <div>
                    <Slider {...settings}>
                        <div className='carousel-mobile-step-wrapper'>
                            <img
                                className="step-img"
                                src={firstSlide}
                                alt="First slide"
                                height={169}
                                width={207}
                            />
                            <span className='step-carousel-content'>Subscribe to a plan OR Select a service</span>
                            
                        </div>

                        <div className='carousel-mobile-step-wrapper'>
                            <img
                                className="step-img"
                                src={secondSlide}
                                alt="Second slide"
                                height={125}
                                width={136}
                            />
                            <span className='step-carousel-content'>Schedule an Appointment</span>
                        </div>

                        <div className='carousel-mobile-step-wrapper'>
                            <img
                                className="step-img"
                                src={thirdSlide}
                                alt="Third slide"
                                height={150}
                                width={174}
                            />

                            <span className='step-carousel-content'>Get a Certified Expert come to you OR Visit a Partner garage of your choice</span>
    
                        </div>
                    </Slider>
                </div>
            </div>
            <div className='d-flex justify-content-between align-items-center pt-4'>
                 <div>   <img src={bmw} alt="" width={13.44} height={13.59}/></div>   
                 <div>  <img src={toyota} alt=""  width={20.85} height={13.59}/></div>
                 <div>  <img src={lexus} alt="" width={73.45} height={13.59}/></div>
                 <div>  <img src={benxblack} alt="" width={15.06} height={13.59}/></div>
                 <div>  <img src={download} alt=""  width={16.22} height={13.59}/></div>
                 <div>  <img src={honda} alt="" width={34.76} height={13.59}/></div>
                 <div>  <img src={landrover} alt="" width={27.81} height={13.59}/></div>
                 <div>  <img src={ford} alt="" width={40} height={20}/></div>
                </div>
        </div>
    )
}

export default MobileSteps
