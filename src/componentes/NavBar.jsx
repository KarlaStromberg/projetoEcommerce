import { Navbar, Nav, Container, NavbarCollapse, NavbarText} from "react-bootstrap";
import { GerenciarLogin } from "./GerenciarLogin";

function NavBar() {

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" fixed="top" className="bg-opacity-50">
                <Container>
                    <Navbar.Brand href="/">E-commerce</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/produtos">Produtos</Nav.Link>
                    </Nav>
                    <NavbarCollapse className="justify-content-end">
                            <NavbarText>
                                <GerenciarLogin/>
                            </NavbarText>
                        </NavbarCollapse>
                </Container>
            </Navbar>
        </>
 );
}


export default NavBar;
