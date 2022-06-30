import React from 'react'
import Wrapper from '../wrapper/Wrapper'
import './Services.css'
import { Row, Col } from 'react-bootstrap'
import motorcycle from '../../assets/images/motorcycle.png'
import car1 from '../../assets/images/car1.png'
import shuttle from '../../assets/images/shuttle.png'
import tractor from '../../assets/images/tractor.png'



const Services = () => {
    return (
        <div style={{ background: "#fff" }}>
            <Wrapper>
                <Row className='py-5 d-flex justify-content-center' style={{height:"800px"}}>
                    <Col className="services-cointainer d-flex my-auto flex-column col-md-5">
                        <h5>Choose <span>Service Mode</span> </h5>
                        <p>Explore the 3 modes of service available to Jiffix  car owners and fleet operators anywhere in Nigeria to transform your vehicle management experience and save cost.</p>
                        <button className='start-now-btn'>START NOW</button>
                    </Col>
                    <Col className='d-flex my-auto'>
                        <Col className='col-md-4 mobile active-hover'>
                            <h5 className='service-header mobile-h'>MOBILE</h5>
                            <div>
                            <p className='choose-p'>Our certified mobile experts come to you at home, work or by the roadside for a rescue.</p>
                            </div>
                            <i class="fa-solid fa-route tunnel"></i>
                        </Col>

                        <Col className='col-md-4 mx-4 drive-in active-hover'>
                            <h5 className='service-header'>DRIVE-IN</h5>
                            <div>
                            <p className='choose-p'>Drive into any of our partner garages and OEM dealerships across the country for a pre-scheduled service</p>
                            </div>
                            <i class="fa-solid fa-car-tunnel tunnel"></i>
                        </Col>

                        <Col className='col-md-4 hybrid active-hover'>
                            <h5 className='service-header'>HYBRID</h5>
                            <div>
                            <p className='choose-p'>Subscribers choose between a Jiffix mobile expert, or drive into one of our partner garages of your choice.</p>
                            
                            </div>
                            <i class="fa-solid fa-compass-drafting tunnel"></i>
                        </Col>
                    </Col>
                    

                    <div className="services-content">
                        <p>Conveniently fix your bikes, cars, buses, and heavy duty vehicles using any of the available service modes.</p>
                        <div className="services-img-cointainer">
                        <img src={motorcycle} alt="" height={38} width={48}/>
                        <img src={car1} alt="" height={38} width={48}/>
                        <img src={shuttle} alt="" height={38} width={48}/>
                        <img src={tractor} alt="" height={38} width={48}/>
                        </div>
                    </div>
                </Row>

            </Wrapper>
        </div>
    )
}

export default Services
