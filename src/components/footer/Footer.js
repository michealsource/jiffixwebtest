import React from 'react'
import whitelogo from "../../assets/images/whitelogo.png"
import Facebook from "../../assets/images/Facebook.png"
import LinkedIn from "../../assets/images/LinkedIn.png"
import instagram from "../../assets/images/instagram.png"
import { Link } from "react-router-dom";
import mail from "../../assets/images/mail.png"
import headset from "../../assets/images/headset.png"
import address from "../../assets/images/address-footer.png"

import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer-background'>
      <div className="footer-cointainer">
        <div className="first-footer-section">
          <div className="top-footer">
            <div>
              <div className='social-address-container'>
                <img src={whitelogo} alt="" height="30px" />
                <div className="social-icons">
                  <img src={instagram} alt="" />
                  <img src={Facebook} alt="" />
                  <img src={LinkedIn} alt="" />
                </div>
              </div>
            </div>
            <p>About Jiffix</p>
            <p>Fix with Jiffix</p>
            <div>
              <p>Contact Us</p>
              <div className='d-flex'>
                <img src={address} alt="" width={13} height={19} style={{ marginRight: "15px", marginTop: "5px" }} />
                <p className='address-text' style={{ width: "183px" }}>No. 10, 45 Road Off 1st Avenue, Gwarinpa, FCT-Abuja</p>
              </div>

              <div className='d-flex'>
                <img src={headset} alt="" width={22} height={22} style={{ marginRight: "9px" }} />
                <p className='address-text'><span>+234 (805) 577 5095</span></p>
              </div>

              <div className='d-flex'>
                <img src={mail} alt="" width={20} height={18} style={{ marginRight: "12px" }} />
                <p className='address-text'>hello@jiffixtech.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>

      <div className="terms-condition-container">

        <span>© 2022 All Rights Reserved.</span>
        <div className='terms-conditions-privacy'>
          <Link to="/terms" className='policy-text'>Terms & Conditions</Link>
          <Link to="/privacy-policy" style={{ paddingLeft: "25px" }} className='policy-text privacy-justify'>Privacy Policy</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
