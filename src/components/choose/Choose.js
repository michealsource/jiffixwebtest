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

                 {activeTab ==="signup" ? <p className='choose-text'>Our inspection program is designed to eliminate the hassle or worry’s associated with arising faults or vehicle breakdown. The plans provide coverage for a period of 12-months with access to on-demand inspection & diagnosis.</p>: activeTab ==="login"?<p className='choose-text'>Coming Soon...</p> :activeTab ==="soon"? <p className='choose-text'>Coming Soon...</p>:null}

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
