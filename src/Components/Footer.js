import React from "react";
import { Container, Navbar } from "react-bootstrap";

export default function Footer() {
  return (
    <>
      <Navbar className="text-center text-now" expand="lg">
        <Container>
          <Navbar.Brand
            href="https://www.linkedin.com/in/prabadhya-upadhyay-198a22218/"
            className="text-align"
          >
            Made with &#10084; by Prabadhya{" "}
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
