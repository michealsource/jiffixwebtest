import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import modallogo from '../../assets/images/modallogo.png'
import bookingImage from '../../assets/images/smileeee.png'
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
import rangerover from '../../assets/images/book-images/range-rover.png'
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
                    <span className="already-customer-mobile">Already a customer? <span className='signin-mobile'>Sign In</span></span>
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

                            <Col className='col-md-6'>
                                <Form.Select className="input-outline modal-phone">
                                    <option>District</option>
                                    <option>Gwarimpa</option>
                                    <option>Kubwa</option>
                                    <option>Lokogoma</option>
                                </Form.Select>
                            </Col>

                            <Col className='col-md-6 have-account'>
                              <p className='already-customer-text'>Already a customer? <span style={{color:"#151515", fontWeight:"bold", textDecoration:"underline"}}>Login</span></p>
                            </Col>

                            <Col className='col-md-6'>
                            <button  className="book phone-book">Proceed <FaLongArrowAltRight/></button>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="partners-icons">
                    <img width={49.64} height={20} src={ford} alt="" />
                    <img width={106.57} height={18.24} src={lexus} alt="" />
                    <img className='bme-img' width={36} height={30} src={bmw} alt="" />
                    <img width={32.43} height={18.24} src={honda} alt="" />
                    <img width={29.12} height={20.68} src={toyota} alt="" />
                    <img width={29.79} height={18.24} src={white} alt="" />
                    <img width={19.86} height={18.24} src={benz} alt="" />
                    <img width={102.6} height={90} src={rangerover} alt="" />
                </div>
            </Modal>
        </div>
    )
}

export default BookingModal
