import { Navbar, Nav, Container, Button} from "react-bootstrap";

function NavBar() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/produtos">Produtos</Nav.Link>
                        
                    </Nav>
                </Container>
            </Navbar>
        </>
 );
}

export default NavBar;
