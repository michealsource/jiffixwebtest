import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';
import { FaLongArrowAltRight } from "react-icons/fa";
import './Login.css'
function Login() {
  return (
    <Form className='bg-light p-5 shadow p-3 mb-5 bg-body' style={{borderRadius:"20px",height:"350px"}}>
      <Row>
        <h5 style={{paddingBottom:"20px", fontSize:"20px",fontWeight:"600"}}>Sign In</h5>
        <Col className='col-md-12 mb-3'>
          <Form.Control type="email" placeholder="Email" className="input-outline" />
        </Col>
        <Col className='col-md-12 mb-3'>
          <Form.Control type="text" placeholder="Password" className="input-outline" />
          <p style={{color:"#1083AA",textDecoration:"underline",fontSize:"13px",paddingTop:"15px"}}>Forgot password?</p>
          <div className="dnt-have-account-container">
                <p>Don’t have an account? <span style={{color:"#1083AA",textDecoration:"underline"}}>Sign Up</span></p>
                <button className="login-btn-tab">Sign In<FaLongArrowAltRight/></button>
          </div>
        </Col>
      </Row>
      
    </Form>
  );
}

export default Login;