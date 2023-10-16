import { Container, Row , Col } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import faq from '../assets/images/faq.jpg'

function Faq() {
    return (
        <Container className='marginForSections font'>
            <h1>Frequently asked questions</h1>
            <Row>
                <Col variant="dark" sm={7}>
                <Accordion defaultActiveKey="0" className='marginForSections'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Lorem ipsum dolor sit amet?</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Consectetur adipiscing elit?</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Llabore et dolore magna aliqua</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Incididunt ut labore?</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>Tempor incididunt ut?</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
                </Col>
                
                <Col sm={5}>
                <img src={faq} alt="" style={{maxHeight:"300px", paddingTop:"30px", marginLeft:"20px"}} className='radiusimagefaq animated' />
                </Col>
            </Row>
           
        </Container>
    );
}

export default Faq;