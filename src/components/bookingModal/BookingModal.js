import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import modallogo from '../../assets/images/modallogo.png'
import bookingImage from '../../assets/images/bookingImage.png'
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
// COMPANIES LOGOS IMPORT AS PNG
import ford from '../../assets/images/book-images/FORD.png'
import lexus from '../../assets/images/book-images/LEXUS.png'
import bmw from '../../assets/images/book-images/BMW.png'
import honda from '../../assets/images/book-images/HONDA.png'
import toyota from '../../assets/images/book-images/TOYOTA.png'
import white from '../../assets/images/book-images/VWHITE.png'
import benz from '../../assets/images/book-images/benz.png'
import rangerover from '../../assets/images/book-images/rangerover.png'
import close from '../../assets/images/book-images/close.png';
import { FaLongArrowAltRight,FaTimes } from "react-icons/fa";

import './BookingModal.css';
const BookingModal = ({ show, handleClose }) => {
    return (
        <div>
            <Modal show={show} onHide={handleClose} className="modal-wrapper">
                <div className="top-modal">
                    <h5>Start your plan!</h5>
                    <p>NEVER AGAIN WORRY ABOUT VEHICLE INSPECTIONS OR BREAKDOWN, YOU’LL BE COVERED FOR <span>12-MONTHS!</span> </p>
                </div>

                <img src={modallogo} alt="" className='Modal-logo' />
                <img src={close} alt="" className='close-img' onClick={handleClose} />

                <div className="form-car-container">
                <FaTimes className='mobile-close'  style={{color:"#fff"}} size={18} onClick={handleClose}/>
                    <img src={bookingImage} alt="" />
                    <div className="booking-field-form">
                        
                        <Row>
                            <Col className='col-md-6 mb-2'>
                                <Form.Control type="text" placeholder="First Name" className="input-outline modal-phone" />
                            </Col>
                            <Col className='col-md-6 mb-2'>
                                <Form.Control type="text" placeholder="First Name" className="input-outline modal-phone" />
                            </Col>

                            <Col className='col-md-6 mb-2'>
                                <Form.Control type="text" placeholder="Phone" className="input-outline modal-phone" />
                            </Col>

                            <Col className='col-md-6 mb-2'>
                                <Form.Control type="email" placeholder="email" className="input-outline modal-phone" />
                            </Col>

                            <Col className='col-md-6 mb-2'>
                                <Form.Select className="input-outline modal-phone">
                                    <option>State</option>
                                    <option>FCT</option>
                                </Form.Select>
                            </Col>

                            <Col className='col-md-6 mb-2'>
                                <Form.Select className="input-outline modal-phone">
                                    <option>District</option>
                                    <option>Gwarimpa</option>
                                    <option>Kubwa</option>
                                    <option>Lokogoma</option>
                                </Form.Select>
                            </Col>

                            <Col className='col-md-6 have-account'>
                              <p style={{fontSize:"13px", paddingTop:"30px"}}>Already a customer? <span style={{color:"#151515", fontWeight:"bold", textDecoration:"underline"}}>Login</span></p>
                            </Col>

                            <Col className='col-md-6'>
                            <button  className="form-submit-next-btn book">Proceed <FaLongArrowAltRight/></button>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="partners-icons">
                    <img width={75} height={30} src={ford} alt="" />
                    <img width={161} height={30} src={lexus} alt="" />
                    <img width={36} height={30} src={bmw} alt="" />
                    <img width={49} height={30} src={honda} alt="" />
                    <img width={44} height={34} src={toyota} alt="" />
                    <img width={45} height={30} src={white} alt="" />
                    <img width={30} height={30} src={benz} alt="" />
                    <img width={141} height={13} src={rangerover} alt="" />
                </div>
            </Modal>
        </div>
    )
}

export default BookingModal
