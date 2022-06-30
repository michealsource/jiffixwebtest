import React from 'react'
import './Goal.css'
import { Row, Col } from 'react-bootstrap';

import seedling from '../../assets/images/seedling.png';
import sketch from '../../assets/images/sketch.png';
const Goal = () => {
  return (
    <div style={{ background: "#16222C", height: "700px" }} className="goal-wrapper">
      <div className="goal-container">
        <Row>
          <h2 className="goal-title">Our Impact Goals</h2>
          <Col style={{ color: "#ffff" }} className="d-flex flex-column align-items-center justify-content-center first-row mt-5">
            <img src={seedling} alt="" width={40} height={40} className="goal-icon-svg"/>
            <h4 className='goal-count'>90%</h4>
            <h5 className='goal-count-head'>Environmental Compliance</h5>
            <p className='goal-content'>Jiffix is committed to ensuring that vehicles on our roads are environmentally compliant, reducing the carbon footprint of every vehicle, thus enhancing our overall wellbeing.</p>
          </Col>

          <Col style={{ color: "#ffff" }} className="d-flex flex-column align-items-center justify-content-center second-row mt-5">
            <img src={sketch} alt="" width={40} height={40} />
            <h4 className='goal-count'>60%</h4>
            <h5 className='goal-count-head'>Digital Inclusion</h5>
            <p className='goal-content'>Jiffix provides education and training to mechanics across the country, connecting them to the power of technology to transform their work and lives, increasing their household income and socio-economic status</p>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Goal
