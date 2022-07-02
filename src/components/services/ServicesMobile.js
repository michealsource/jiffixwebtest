import React from 'react'
import './Services.css'
import Slider from "react-slick";
import motorcycle from '../../assets/images/motorcycle.png'
import car1 from '../../assets/images/car1.png'
import shuttle from '../../assets/images/shuttle.png'
import tractor from '../../assets/images/tractor.png'
const ServicesMobile = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        autoplay: false,
        slidesToShow: 1.2,
        slidesToScroll: 1,
        
    };
    return (
        <>
        <div className='service-mobile-container'>
            <div className="service-mobile-top">
                <h4>Choose <span>Service Mode</span></h4>
                <p>Enjoy the 3 modes of service available to Jiffix  car owners and fleet operators anywhere in Nigeria to transform your vehicle management experience and save cost.</p>
                <button>EXPLORE OUR SERVICES</button>
            </div>
            <div className="service-mobile-bottom">
                <Slider {...settings}>
                    <div className="mobile-phone active-mobile">
                        <h5 className='service-header mobile-h active-heade'>MOBILE</h5>
                        <p className='mobile-service-content'>Our certified mobile experts come to you at home, work or by the roadside for a rescue.</p>
                        <i class="fa-solid fa-route tunnel"></i>
                    </div>

                    <div className="mobile-phone">
                        <h5 className='service-header mobile-h'>DRIVE-IN</h5>
                        <p className='mobile-service-content drive-p'>Drive into any of our partner garages and OEM dealerships across the country for a pre-scheduled service</p>
                        <i class="fa-solid fa-car-tunnel tunnel"></i>
                    </div>

                    <div className="mobile-phone">
                        <h5 className='service-header mobile-h'>HYBRID</h5>
                        <p className='mobile-service-content'>Subscribers choose between a Jiffix mobile expert, or drive into one of our partner garages of your choice.</p>
                        <i class="fa-solid fa-compass-drafting tunnel"></i>
                    </div>
                </Slider>

                <p className='content-pagargraph-mobile-service'>Conveniently fix your bikes, cars, buses, and heavy duty vehicles using any of the available service modes.</p>

                <div className="cars-mobile-container">
                    <img src={motorcycle} alt="" height={18.68} width={22.39} />
                    <img src={car1} alt="" height={18.68} width={22.39} />
                    <img src={shuttle} alt="" height={18.68} width={22.39} />
                    <img src={tractor} alt="" height={18.68} width={22.39} />
                </div>
            </div>
        </div>
        
        </>
    )
}

export default ServicesMobile