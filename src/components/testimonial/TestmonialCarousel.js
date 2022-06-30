import Carousel from 'react-bootstrap/Carousel';
import './Testimonial.css'
function TestmonialCarousel() {
    return (
        <div className="testmonial-wrapper">
        <Carousel indicators={false}>
          <Carousel.Item>
             <p style={{color:"#fff",fontSize:"14px",fontWeight:"600", lineHeight:"25px"}}>Join Jiffix car owner’s and fleet managers and begin your journey to quality, convenience, and affordable vehicle maintenance today.</p>
             <p style={{color:"#c4c4c4"}}>Prince Ezike</p>
          </Carousel.Item>

          <Carousel.Item>
             <p style={{color:"#fff",fontSize:"14px",fontWeight:"600", lineHeight:"25px"}}>Join Jiffix car owner’s and fleet managers and begin your journey to quality, convenience, and affordable vehicle maintenance today.</p>
             <p style={{color:"#c4c4c4"}}>Prince Ezike</p>
          </Carousel.Item>

          <Carousel.Item>
             <p style={{color:"#fff",fontSize:"14px",fontWeight:"600", lineHeight:"25px"}}>Join Jiffix car owner’s and fleet managers and begin your journey to quality, convenience, and affordable vehicle maintenance today.</p>
             <p style={{color:"#c4c4c4",fontWeight:"500"}}>Prince Ezike</p>
          </Carousel.Item>
          
        </Carousel>
        </div>
     
      );
}

export default TestmonialCarousel;