import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';
import { FaLongArrowAltRight } from "react-icons/fa";
function InputForm() {
  return (
    <Form className='bg-light p-5 shadow mb-5 bg-body' style={{borderRadius:"20px"}}>
  
      <Row>
        <Col className='col-md-6 mb-3'>
          <Form.Control type="text" placeholder="First Name" className="input-outline" />
        </Col>
        <Col className='col-md-6 mb-3'>
          <Form.Control type="text" placeholder="Last Name" className="input-outline" />
        </Col>

        <Col className='col-md-6 mb-3'>
          <Form.Control type="text" placeholder="Phone" className="input-outline" />
        </Col>

        <Col className='col-md-6'>
          <Form.Control type="email" placeholder="email" className="input-outline" />
        </Col>

        <Col className='col-md-6'>
          <Form.Select className="input-outline">
            <option>State</option>
            <option>FCT</option>
          </Form.Select>
        </Col>

        <Col className='col-md-6'>
          <Form.Select className="input-outline">
            <option>District</option>
            <option>Gwarimpa</option>
            <option>Kubwa</option>
            <option>Lokogoma</option>
          </Form.Select>
        </Col>

        <Col className='col-md-6'>
        <p style={{fontSize:"13px", paddingTop:"30px"}}>Already a customer? <span style={{color:"#1083AA", cursor:"pointer", fontWeight:"bold", textDecoration:"underline"}}>Login</span></p>
        </Col>

        <Col className='col-md-6'>
        <button className="form-submit-next-btn tab-signup">Proceed<FaLongArrowAltRight/></button>
        </Col>
        
      </Row>
      
    </Form>
  );
}

export default InputForm;