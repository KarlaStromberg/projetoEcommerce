import { Button, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import promo1 from "../assets/images/promo1.png";
import promo2 from "../assets/images/promo2.jpg";
import promo3 from "../assets/images/promo3.jpg";

function PromoBlocks() {
  return (
    <Container>
    <Row xs={1} md={3} className="marginForSections font">
        <Col>
        <Card className="marginForBlocks" bg="light" border="light">
            <Card.Img variant="top" src={promo1}  alt="" className="card-image-top"/>
            <Card.Body>
              <Card.Title>Smartphones</Card.Title>
              <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget leo quam. Duis interdum quam non turpis malesuada, vitae luctus neque laoreet. </Card.Text>
              <Button variant='dark' href='/login'>View Collection</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="marginForBlocks" bg="light" border="light">
            <Card.Img variant="top" src={promo2}  alt="" className="card-image-top"/>
            <Card.Body>
              <Card.Title>Video games</Card.Title>
              <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget leo quam. Duis interdum quam non turpis malesuada, vitae luctus neque laoreet. </Card.Text>
              <Button variant='dark' href='/login'>View Collection</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="marginForBlocks" bg="light" border="light">
            <Card.Img variant="top" src={promo3} alt="" className="card-image-top"/>
            <Card.Body>
              <Card.Title>Computers</Card.Title>
              <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget leo quam. Duis interdum quam non turpis malesuada, vitae luctus neque laoreet. </Card.Text>
              <Button variant='dark' href='/login'>View Collection</Button>
            </Card.Body>
          </Card>
        </Col>
    </Row>
    </Container>
  );
}

export default PromoBlocks;