import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
const NavBar = () => {
  return (
    <div>
      <Navbar bg="primary" color="white">
        <Container>
          <Nav className="me-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Cars</Nav.Link>
            <Nav.Link>About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
