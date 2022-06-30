import React from 'react'
import { Row, Col } from 'react-bootstrap' 
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


import './Steps.css'
import Wrapper from '../wrapper/Wrapper'
const Steps = () => {
    return (
        <div style={{background:"#fff"}}>
            <Wrapper style={{marginTop:"10px"}}>
            <Row className='py-5 d-flex justify-content-center'>
                <Col className='col-md-3' style={{marginRight:"180px", marginTop:"100px"}}>
                    <h5 className='step-head'>Three steps <span className='step-sub-head'>to fix with jiffix</span></h5>
                    <p className="step-description">Find out how you can get access to quality vehicle inspections, affordable repairs, efficient maintenance and convenient modes of service anywhere in Nigeria</p>
                    <button className='start-plan-btn'>EXPLORE OUR PLANS</button>
                </Col>
                <Col className='d-flex my-auto'>
                    <Col className='col-md-3 step-con'>
                        <img src={firstSlide} alt="" width={207} height={169}/>
                        <div className='step-line'></div>
                        <p className="step-content">Subscribe to a plan OR Select a service</p>
                    </Col>
                    <Col className='col-md-3 mx-5 step-con'>
                        <img src={secondSlide} alt="" width={136} height={125}/>
                        <div className='step-line two'></div>
                        <p  className="step-content">Schedule an Appointment</p>
                    </Col>
                    <Col className='col-md-4 step-con'>
                        <img src={thirdSlide} alt="" width={174} height={150}/>
                        <div className='step-line three'></div>
                        <p className="step-content">Get a Certified Expert come to you OR Visit a Partner garage of your choice</p>
                    </Col>
                </Col>
            </Row>

            <Row>
                <div className='d-flex justify-content-between align-items-center py-5 company'>
                 <div>   <img src={bmw} alt="" width={38} height={38}/></div>   
                 <div>  <img src={toyota} alt=""  width={58} height={38}/></div>
                 <div>  <img src={lexus} alt="" width={190} height={38}/></div>
                 <div>  <img src={benxblack} alt="" width={38} height={38}/></div>
                 <div>  <img src={download} alt=""  width={42} height={38}/></div>
                 <div>  <img src={honda} alt="" width={90} height={38}/></div>
                 <div>  <img src={landrover} alt="" width={80} height={38}/></div>
                 <div>  <img src={ford} alt="" width={92} height={38}/></div>
                </div>
            </Row>
        </Wrapper>
        </div>
      
    )
}

export default Steps