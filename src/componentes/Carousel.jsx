import Carousel from 'react-bootstrap/Carousel';
import video1 from '../assets/images/video1.mp4';

function CarouselAnuncios() {
  return (
    <Carousel>
      <Carousel.Item>
        {/* <img src="//warehouse-theme-metal.myshopify.com/cdn/shop/files/Slide-3-desktop.jpg?v=1613538636&width=1800" className="d-block w-100" alt="First slide" /> */}
        <video loop autoPlay muted alt="First slide" className="d-block w-100 coverslideshow">
        <source src={require('../assets/images/video1.mp4')} type="video/mp4" />
        </video>
        <Carousel.Caption style={{color:"#000"}}>
        </Carousel.Caption >
      </Carousel.Item>
      <Carousel.Item>
      <img src="//warehouse-theme-metal.myshopify.com/cdn/shop/files/slide-1-headphones.jpg?v=1613539571&width=1800" className="d-block w-100 coverslideshow" alt="Second slide" />
        <Carousel.Caption style={{color:"#000"}}>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="//warehouse-theme-metal.myshopify.com/cdn/shop/files/Slide-10-desktop_2800x_1.jpg?v=1613773763&width=1800" className="d-block w-100 coverslideshow" alt="Third slide" />
        <Carousel.Caption style={{color:"#000"}}>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselAnuncios;