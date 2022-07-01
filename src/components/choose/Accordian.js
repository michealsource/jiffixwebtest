import React from 'react'
import { Accordion } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { FaLongArrowAltRight } from "react-icons/fa";
import './Choose.css'
const Accordian = () => {
    return (
        <div>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header className='accordian-header'>Vehicle Inspection Program</Accordion.Header>
                    <Accordion.Body>
                        <p className='accordian-signup-content'>This program is designed to take away your worries about identifying issues with your car (whenever they arise). You will be entitled to a number of inspections for a period of <span>12-months,</span>  anywhere in Nigeria. This comes with a <span>complimentary road-side rescue.</span></p>

                        <p className="bottom-text-accordian-signup"> There’s been nothing better, since agege bread!</p>
                        <Form.Control type="text" placeholder="First Name" className="input-outline mb-2" />
                        <Form.Control type="text" placeholder="Last Name" className="input-outline mb-2" />
                        <Form.Control type="text" placeholder="Phone" className="input-outline mb-2" />
                        <Form.Control type="email" placeholder="email" className="input-outline mb-2" />
                        <Form.Select className="input-outline mb-2">
                            <option>State</option>
                            <option>FCT</option>
                        </Form.Select>

                        <Form.Select className="input-outline mb-2">
                            <option>District</option>
                            <option>Gwarimpa</option>
                            <option>Kubwa</option>
                            <option>Lokogoma</option>
                        </Form.Select>

                        <button className="form-submit-next-btn accordian-btn">Proceed<FaLongArrowAltRight /></button>
                        <p style={{ fontSize: "12px", paddingTop: "30px" }}>Already a customer? <span style={{ color: "#1083AA", cursor: "pointer", fontWeight: "bold", textDecoration: "underline" }}>Sign In</span></p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header className='c'>Routine Maintenance Program</Accordion.Header>
                    <Accordion.Body>
                        <p className='accordian-signup-content' style={{width:"380px"}}>Over 80% of our vehicle’s health over time, and its logevity is determined by our maintenance habits. This program takes over and<span>automates your vehicle maintenance </span>activity, and ensures your <span>never miss a service</span>  with our multi-modal service delivery anywhere in Nigeria. </p>

                        <p className="bottom-text-accordian"> This is the best thing to happen to your vehicle!</p>
                        <h5 style={{width:"60px", paddingBottom: "10px", fontSize: "16px", fontWeight: "600" }}>Sign In</h5>
                        <Form.Control type="email" placeholder="Email" className="input-outline mb-2" />
                        <Form.Control type="text" placeholder="Password" className="input-outline" />
                        <div>
                            <button className="login-btn-tab accordian-sign-btn">Sign In<FaLongArrowAltRight /></button>
                            <p style={{fontSize: "12px"}}>Don’t have an Account? <span style={{ color: "#1083AA", textDecoration: "underline" ,fontWeight: "600" }}>Sign Up</span></p>
                            <p style={{ color: "#1083AA", textDecoration: "underline", fontSize: "12px", paddingTop: "-10px",fontWeight: "500" }}>Forgot password?</p>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default Accordian
