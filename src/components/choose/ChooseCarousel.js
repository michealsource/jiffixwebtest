import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import firstCarouselChoose from '../../assets/images/first-carousel-choose.png'
import secondCarouselChoose from '../../assets/images/second-carousel-choose.png'
import thirdCarouselChoose from '../../assets/images/third-carousel-choose.png'
import fourthCarouselChoose from '../../assets/images/fourth-carousel-choose.png'
import './Choose.css'
const ChooseCarousel = () => {
  return (
    <div>
      <Carousel indicators={false} className="choose-carousel-container">
        <Carousel.Item className='carousel-container'>
          <img className='choose-carousel-img-first' src={firstCarouselChoose} alt="" width={240} height={180} style={{ marginBottom: "20px" }} />
          <h5 style={{ fontSize: "25px", fontWeight: "700" }}>360° Quality Control</h5>
          <p>Enjoy robust quality control processes, supervisions, and our unique digital reporting for all inspections and repairs across all service modes</p>
        </Carousel.Item>

        <Carousel.Item className='carousel-container'>
          <img className='choose-carousel-img-second' src={secondCarouselChoose} alt="" width={290} height={180} style={{ marginBottom: "20px" }} />
          <h5 style={{ fontSize: "25px", fontWeight: "700" }}>12 Months Warranty</h5>
          <p>All parts are supplied by Jiffix with up to 12 months warranty across all service modes and centers</p>
        </Carousel.Item>

        <Carousel.Item className='carousel-container'>
          <img className='choose-carousel-img-third' src={thirdCarouselChoose} alt="" width={290} height={180} style={{ marginBottom: "20px" }} />
          <h5 style={{ fontSize: "25px", fontWeight: "700" }}>70% Repair Financing</h5>
          <p>Enjoy up to 70% repair financing (Fix-Now-Pay-Later) for your maintenance and repairs</p>
        </Carousel.Item>

        <Carousel.Item className='carousel-container'>
          <img className='choose-carousel-img-fourth' src={fourthCarouselChoose} alt="" style={{ marginBottom: "20px" }} width={230} height={180} />
          <h5 style={{ fontSize: "25px", fontWeight: "700" }}>Premium Access</h5>
          <p>Access to wide range of garages, dealerships and ranked experts with a single Jiffix subscription</p>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default ChooseCarousel
