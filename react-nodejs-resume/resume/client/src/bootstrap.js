import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Bootstrapslider() {

        return(
            <div className="resumeImg">
            <Carousel>
            <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/Nature.jpg" 
              alt="First slide"
            />
           <Carousel.Caption>
            <h3>Free time in nature</h3>
            <p>Enjoy passin time in nature appreciating the life I was give in earth</p>
            </Carousel.Caption>
            </Carousel.Item>
           <Carousel.Item>
          <img 
            className="d-block w-100"
            src="/images/Nature2.JPG"
            alt="Second slide"
          />
        <Carousel.Caption>
           <h3>Beyond the mountains</h3>
           <p>The place was in Arizona!</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
       <img
          className="d-block w-100"
          src="/images/Time.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Nature</h3>
          <p>Thinkin about the perspective of sizes</p>
        </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        </div>
        );
}

export default Bootstrapslider