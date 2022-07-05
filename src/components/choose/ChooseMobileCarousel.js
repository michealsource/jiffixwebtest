import React from 'react'
import Slider from "react-slick";
import firstCarouselChoose from '../../assets/images/first-carousel-choose.png'
import secondCarouselChoose from '../../assets/images/second-carousel-choose.png'
import thirdCarouselChoose from '../../assets/images/third-carousel-choose.png'
import fourthCarouselChoose from '../../assets/images/fourth-carousel-choose.png'

import Accordian from './Accordian';
import './Choose.css'
const ChooseMobileCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className='choose-mobile-container'>
        <div className="mobile-carousel-choose">
                <h4>Why Choose <span>Jiffix</span></h4>
                <p>Our mission is to enable your safe, reliable and unhindered mobility, through Quality Centered vehicle repair and maintenance solutions, that is affordable.</p>

                <div className="carousel-mobile-container-choose">
                <Slider {...settings}>

                    <div className='mobile-choose-content'>
                    <img height={178} width={133} className='choose-carousel-img-first' src={firstCarouselChoose} alt=""  />
                    <h5 style={{ fontSize: "20px", fontWeight: "700", color:"#fff",paddingTop:"40px",textAlign:"center" }}>360° Quality Control</h5>
                    <p >Enjoy robust quality control processes, supervisions, and our unique digital reporting for all inspections and repairs across all service modes</p>
                    </div>

                    <div className='mobile-choose-content'>
                        <img className='choose-carousel-img-second' src={secondCarouselChoose} alt=""  />
                        <h5 style={{ fontSize: "20px", fontWeight: "700", color:"#fff",paddingTop:"25px",textAlign:"center" }}>12 Months Warranty</h5>
                        <p>All parts are supplied by Jiffix with up to 12 months warranty across all service modes and centers</p>
                    </div>

                    <div className='mobile-choose-content'>
                        <img className='choose-carousel-img-third' src={thirdCarouselChoose} alt=""  />
                        <h5 style={{ fontSize: "20px", fontWeight: "700", color:"#fff",paddingTop:"25px",textAlign:"center" }}>70% Repair Financing</h5>
                         <p >Enjoy up to 70% repair financing (Fix-Now-Pay-Later) for your maintenance and repairs</p>
                    </div>

                    <div className='mobile-choose-content'>
                        <img className='choose-carousel-img-fourth' src={fourthCarouselChoose}  alt=""  />
                        <h5 style={{ fontSize: "20px", fontWeight: "700", color:"#fff",paddingTop:"25px",textAlign:"center" }}>Premium Access</h5>
                        <p className='mobile-choose-content'>Access to wide range of garages, dealerships and ranked experts with a single Jiffix subscription</p>
                    </div>

                </Slider>
                </div>
        </div>
        <h4 className='start-from-here-mobile'>Start from  <span>here</span></h4>

        <Accordian/>
    </div>
 
  )
}

export default ChooseMobileCarousel
