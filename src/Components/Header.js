import React from "react";
import { Navbar, Container } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar className="navbar" expand="sm">
      <Container>
        <Navbar.Brand href="#home">Weatherify</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
