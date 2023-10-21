import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

export const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-4">
            <Link to="/" className='text-decoration-none text-dark'>Home</Link>
            <Link to="/shop" className='text-decoration-none text-dark'>Shop</Link>
            <Link to="/about" className='text-decoration-none text-dark'>About</Link>
            <Link to="/labone" className='text-decoration-none text-dark'>Lab One</Link>
            <Link to="/counter" className='text-decoration-none text-dark'>Counter</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
