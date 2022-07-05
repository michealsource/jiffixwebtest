import React, { useState } from 'react'
import ChooseCarousel from './ChooseCarousel'
import InputForm from './InputForm';
import Login from '../login/Login';
import { Row, Col } from 'react-bootstrap';
import ChooseMobileCarousel from './ChooseMobileCarousel';
import './Choose.css'
const Choose = () => {
    const [activeTab, setactiveTab] = useState('signup')
    return (
        <div className='mobile-wrapper-choose'>
            <div className="top-container">
                <div className="choose-content-wrapper">
                    <div className="why-chose-cointainer">
                        <h5>Why Choose <span className='jiffix'> Jiffix</span> </h5>

                        <p>Our mission is to enable your safe, reliable and unhindered mobility, through Quality Centered vehicle repair and maintenance solutions, that is affordable.</p>
                    </div>
                        <ChooseCarousel />
                </div>

            </div>
            <div className="bottom-cointainer">
            <Row className='py-5 d-flex align-items-center bottom-row-wrapper'>

                <Col className="start-from-here col-md-5" style={{marginRight:"70px", height:"100%", paddingTop:"50px"}}>
                 <h5>Start from <span>here</span></h5>
                 <div className="program-cointainer">
                    <div className= {activeTab==="signup"? "tab active-tab":"tab"} onClick={()=>setactiveTab("signup")}> Vehicle Inspection Program</div>
                    <div className={activeTab==="soon"? "tab active-tab":"tab"} onClick={()=>setactiveTab("soon")}>Routine Maintenance Program</div>
                    <div className={activeTab==="login"? "tab active-tab":"tab"} onClick={()=>setactiveTab("login")}>Get Instant Quote</div>
                 </div>

                 {activeTab ==="signup" ?
                    <div className='choose-text-login'>
                    <p >This program is designed to take away your worries about identifying issues with your car (whenever they arise). You will be entitled to a number of inspections for a period of <span className='bold-text-tab-desktop'>12-months,</span>anywhere in Nigeria. This comes with a <span className='bold-text-tab-desktop'>complimentary road-side rescue. </span></p>
                    <p className='italic-text-tab'>There’s been nothing better, since agege bread!</p> 
                  </div>
                  : activeTab ==="login"? <div className='choose-text-login'><p className='choose-text'>Need a quick service, repair or maintenance? Our instant quote gives you real time pricing for the selected services available. There hasn't been anything better than knowing your cost upfront!</p></div>:
                  activeTab ==="soon"?<div className='choose-text-login'>
                    <p >Over 80% of our vehicle’s health over time, and its logevity is determined by our maintenance habits. This program takes over and <span className='bold-text-tab-desktop'>automates your vehicle maintenance</span> activity, and ensures your <span className='bold-text-tab-desktop'>never miss a service</span>  with our multi-modal service delivery anywhere in Nigeria. </p>
                    <p className='italic-text-tab'>This is the best thing to happen to your vehicle!</p> 
                  </div> :null}

                </Col>
                <Col className="d-flex justify-content-center align-items-center col-md-6" style={{height:"100%", paddingTop:"50px"}}>
                    {activeTab ==="signup"?<InputForm/>:<Login/>}
                </Col>
            </Row>
            </div>
        </div>
    )
}

export default Choose
