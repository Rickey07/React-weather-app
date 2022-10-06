import React from 'react'
import {Navbar,Nav, Container} from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar className='navbar' expand='sm'>
      <Container>
        <Navbar.Brand href="#home">Weather App</Navbar.Brand>
      </Container>
    </Navbar>
  )
}
