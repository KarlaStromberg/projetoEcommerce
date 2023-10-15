import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { GerenciarLogin } from './GerenciarLogin';
import logo from "../assets/images/logo.png";


function NavBarT() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar
        className={isScrolled ? '' : 'bg-opacity-50'} 
        data-bs-theme="dark"
        fixed="top"
        bg="dark"
      >
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} style={{width:"150px", paddingTop:"20px"}}></img>
          </Navbar.Brand>
          <Nav className="me-auto links-nav font">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/produtos">Produtos</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <GerenciarLogin />
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
    </>
  );
}

export default NavBarT;