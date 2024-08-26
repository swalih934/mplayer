import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
          {/* <i className="fa-solid fa-radio fa-beat-fade" style={{color: "#FFD438"}}></i> */}
          <i className="fa-solid fa-box fa-beat-fade text-info"></i>
           {' '}
            Media player
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header