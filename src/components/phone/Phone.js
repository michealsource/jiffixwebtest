import React from 'react'
import './Phone.css'
import { Row, Col } from 'react-bootstrap';
import playstore from '../../assets/images/playstore.png';
import apple from '../../assets/images/app-store.png';
import Welcome from '../../assets/images/Welcome.png';
import { FaGooglePlay,FaApple } from "react-icons/fa";

const Phone = () => {
    return (
        <div className='phone-container'>
            <div className="phone-inner-container">

                <Row>
                    <Col className='phone-left-container'>
                        <div className='customer-left-side'>
                        <h5>Already a Jiffix <span>Customer?</span></h5>
                        <p>Download our mobile app to get access to your dashboard, inspection/maintenance appointments, vehicle health reports, and repair quotes.</p>
                        </div>
                        <div className="coming-soon-container">
                            <div className="phone-btn-container">
                            <button className="btn-ios">
                                <div>
                                {/* <img src={apple} alt="" width={32} height={30}/> */}
                                <FaApple size={30} className="store"/>   
                                </div>

                                <div className="text">
                                    
                                    <span className='top-phone-head'>App Store</span>
                                    <span className='phone-platform'>Coming soon</span>
                                </div>
                                
                            </button>

                            <button className="btn-ios">
                                <div>
                                 <FaGooglePlay size={30} className="store"/>   
                                {/* <img src={playstore} alt=""  width={32} height={30}/> */}
                                </div>

                                <div className="text">
                                   
                                    <span className='top-phone-head'>Google Play</span>
                                    <span className='phone-platform '>Coming soon</span>
                                </div>
                                
                            </button>
                            </div>
                            <h4 className='coming-soon-text'>Coming soon!</h4>
                        </div>
                    </Col>
                    <Col className='right-container-phone'>
                    <img src={Welcome} alt=""  width={452} height={588} style={{zIndex:-1000}}/>
                    </Col>
                </Row>

            </div>
        </div>
    )
}

export default Phone
