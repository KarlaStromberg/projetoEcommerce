import Carousel from 'react-bootstrap/Carousel';

function CarouselAnuncios() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src="//warehouse-theme-metal.myshopify.com/cdn/shop/files/Slide-3-desktop.jpg?v=1613538636&width=1800" className="d-block w-100" alt="First slide" />
        <Carousel.Caption style={{color:"#000"}}>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption >
      </Carousel.Item>
      <Carousel.Item>
      <img src="//warehouse-theme-metal.myshopify.com/cdn/shop/files/slide-1-headphones.jpg?v=1613539571&width=1800" className="d-block w-100" alt="Second slide" />
        <Carousel.Caption style={{color:"#000"}}>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="//warehouse-theme-metal.myshopify.com/cdn/shop/files/Slide-10-desktop_2800x_1.jpg?v=1613773763&width=1800" className="d-block w-100" alt="Third slide" />
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