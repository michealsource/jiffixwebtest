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

                        <button className="form-submit-next-btn">Proceed<FaLongArrowAltRight /></button>
                        <p style={{ fontSize: "13px", paddingTop: "30px" }}>Already a customer? <span style={{ color: "#1083AA", cursor: "pointer", fontWeight: "bold", textDecoration: "underline" }}>Login</span></p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header className='c'>Routine Maintenance Program</Accordion.Header>
                    <Accordion.Body>
                        <h5 style={{ paddingBottom: "20px", fontSize: "20px", fontWeight: "600" }}>Sign In</h5>
                        <Form.Control type="email" placeholder="Email" className="input-outline mb-2" />
                        <Form.Control type="text" placeholder="Password" className="input-outline" />
                        <div>
                            <button className="login-btn-tab">Sign In<FaLongArrowAltRight /></button>
                            <p>Don’t have an account? <span style={{ color: "#1083AA", textDecoration: "underline" }}>Sign Up</span></p>
                            <p style={{ color: "#1083AA", textDecoration: "underline", fontSize: "13px", paddingTop: "-10px" }}>Forgot password?</p>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default Accordian
