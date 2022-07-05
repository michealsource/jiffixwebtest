import Carousel from 'react-bootstrap/Carousel';
import './Testimonial.css'
function TestmonialCarousel() {
    return (
        <div className="testmonial-wrapper">
        <Carousel indicators={false}>
          <Carousel.Item>
             <p style={{color:"#fff", height:"180px", fontSize:"14px",fontWeight:"600", lineHeight:"25px"}}>Jiffix actually exceeded my expectation. Super impressed with the service. They kept to time, gave me the right diagnosis and recommendation and it worked. The feel also very decent. I felt i got more than i paid for. Very professional and efficient. I think i found the perfect company for my cars. Thanks Jiffix</p>
             <p style={{color:"#c4c4c4"}}>Timi Olatunji</p>
          </Carousel.Item>

          <Carousel.Item>
             <p style={{height:"180px", color:"#fff",fontSize:"14px",fontWeight:"600", lineHeight:"25px"}}>Jiffix's expertise is second to none. They were able to arrive at mine in record time and expertly fixed my automobile. I recommend their service.</p>
             <p style={{color:"#c4c4c4"}}>Michael Ojo</p>
          </Carousel.Item>

        </Carousel>
        </div>
     
      );
}

export default TestmonialCarousel;